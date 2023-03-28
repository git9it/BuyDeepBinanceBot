import WebSocket from 'ws';
import queryString from 'query-string';
import { getState } from '../api/fetchData.js';
import createStore from '../store/createStore.js';
import actionsReducer from '../store/actionReducer.js';
import {
  GETPAIRPRICEBYINTERVAL,
  GETCANDLESBYINTERVAL,
  GETALLUSERS,
} from '../store/actions.js';

const store = createStore(actionsReducer);

//create websocket server
export default async (expressServer) => {
  const websocketServer = new WebSocket.Server({
    noServer: true,
    path: '/websockets',
  });

  expressServer.on('upgrade', (request, socket, head) => {
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      websocketServer.emit('connection', websocket, request);
    });
  });

  websocketServer.on(
    'connection',
    function connection(websocketConnection, connectionRequest) {
      const [_path, params] = connectionRequest?.url?.split('?');
      const connectionParams = queryString.parse(params);

      //send data every 3 seconds via websocket
      if (connectionParams.on) {
        console.log('user connected');
        (async () => {
          const intervalID = setInterval(sendData, 3000);

          async function sendData() {
            console.log(getState());
            if (JSON.stringify(getState()) !== '{}') {
              websocketConnection.send(JSON.stringify(getState()));
            }
          }
        })();
      }

      websocketConnection.on('message', (message) => {
        let parsedMessage = '';
        try {
          parsedMessage = JSON.parse(message);

          if (parsedMessage.pair) {
            const pair = parsedMessage.pair;

            store.dispatch({ type: GETPAIRPRICEBYINTERVAL, payload: pair });
          }

          if (parsedMessage.candles) {
            const pair = parsedMessage.candles;

            store.dispatch({ type: GETCANDLESBYINTERVAL, payload: pair });
          }

          if (parsedMessage.users) {
            store.dispatch({ type: GETALLUSERS });
          }
        } catch (error) {
          console.log(error);
        }
      });
    }
  );

  return websocketServer;
};
