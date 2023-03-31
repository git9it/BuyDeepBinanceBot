import Trade from '../models/BuyTrade.js';
import BadRequestError from '../errors/bad-request.js';
import NotFoundError from '../errors/not-found.js';
import createStore from '../store/createStore.js';
import actionsReducer from '../store/actionReducer.js';
import {
  GETPAIRPRICEBYINTERVAL,
  GETCANDLESBYINTERVAL,
  GETALLUSERS,
} from '../store/actions.js';

const store = createStore(actionsReducer);

const createNewTrade = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    const { pair, timeFrame, volumeSold, amountToBuy, sellProcent } = req.body;

    if (!pair || !timeFrame || !volumeSold || !amountToBuy || !sellProcent) {
      throw new BadRequestError('please provide all values');
    }

    const trade = await Trade.create({
      pair,
      timeFrame,
      volumeSold,
      amountToBuy,
      sellProcent,
    });
    store.dispatch({ type: GETCANDLESBYINTERVAL, payload: pair });
    res.status(200).json({ trade });
  }
};

const getAllTrades = async (req, res) => {
  const trades = await Trade.find();
  res.status(200).json(trades);
};

const getSingleTrade = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await Trade.findOne({ _id: itemId });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }
  res.status(200).json({ item });
};

const updateTrade = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await Trade.findOneAndUpdate({ _id: itemId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }
  res.status(200).json({ item });
};

const deleteTrade = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await Trade.findOneAndDelete({ _id: itemId });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }

  res.status(200).json({ msg: 'Success', data: itemId });
};

const cancelTrade = async (req, res) => {
  console.log(req.params);
  const { id: itemId } = req.params;
  const item = await Trade.findByIdAndUpdate(itemId, { status: 'Canceled' });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }

  res.status(200).json({ msg: 'Success', data: itemId });
};

export {
  createNewTrade,
  getAllTrades,
  getSingleTrade,
  deleteTrade,
  updateTrade,
  cancelTrade,
};
