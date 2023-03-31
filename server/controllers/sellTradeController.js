import SellTrade from '../models/SellTrade.js';
import BadRequestError from '../errors/bad-request.js';
import NotFoundError from '../errors/not-found.js';

const getAllSellTrades = async (req, res) => {
  const trades = await SellTrade.find();
  res.status(200).json(trades);
};

const getSingleSellTrade = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await SellTrade.findOne({ _id: itemId });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }
  res.status(200).json({ item });
};

const updateSellTrade = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await SellTrade.findOneAndUpdate({ _id: itemId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }
  res.status(200).json({ item });
};

const deleteSellTrade = async (req, res) => {
  const { id: itemId } = req.params;
  const item = await SellTrade.findOneAndDelete({ _id: itemId });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }

  res.status(200).json({ msg: 'Success', data: itemId });
};

const cancelSellTrade = async (req, res) => {
  console.log(req.params);
  const { id: itemId } = req.params;
  const item = await SellTrade.findByIdAndUpdate(itemId, {
    status: 'Canceled',
  });
  if (!item) {
    throw new NotFoundError(`No item with id : ${itemId}`);
  }

  res.status(200).json({ msg: 'Success', data: itemId });
};

export {
  getAllSellTrades,
  getSingleSellTrade,
  deleteSellTrade,
  updateSellTrade,
  cancelSellTrade,
};
