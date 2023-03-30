import WebSocket from 'ws';

function consoleLogMiddleware(wss) {
  return function (req, res, next) {
    const consoleLog = console.log;
    console.log = function () {
      const logData = {
        type: 'console.log',
        data: Array.prototype.slice.call(arguments),
      };
      const serializedLogData = JSON.stringify(logData);
      wss.clients.forEach(function (client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(serializedLogData);
        }
      });
      consoleLog.apply(console, arguments);
    };
    next();
  };
}

export default consoleLogMiddleware;
