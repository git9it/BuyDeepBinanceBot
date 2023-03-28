import subHelper from '../helpers/subscribe.js';
import { getPairPriceByInterval } from '../api/fetchData.js';
import { getCandlesByInterval } from '../api/fetchData.js';

import User from '../models/User.js';
import {
  GETCANDLESBYINTERVAL,
  GETPAIRPRICEBYINTERVAL,
  GETALLUSERS,
} from './actions.js';

const sh = subHelper();

sh.subscribe('getPairPriceByInterval', getPairPriceByInterval);
sh.subscribe('getCandlesByInterval', getCandlesByInterval);

const initialState = {};

const actionsReducer = async (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GETPAIRPRICEBYINTERVAL:
      sh.publish('getPairPriceByInterval', `${action.payload}`);
      console.log(action.payload);
      break;

    case GETCANDLESBYINTERVAL:
      sh.publish('getCandlesByInterval', `${action.payload}`);
      console.log(action.payload);
      break;

    case GETALLUSERS:
      const allUsers = await User.find({});
      console.log(allUsers);
      break;

    default:
      return state;
  }
};

export default actionsReducer;
