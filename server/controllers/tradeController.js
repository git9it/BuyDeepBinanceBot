import { Trade } from '../models/Trade';
import { BadRequestError } from '../errors/bad-request';

const createNewTrade = async (req, res) => {
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
   res.status(200).json({trade})
};

const getAllTrades = async (req, res) => {
  res.send('getAllTrades')
}

const updateTrade = async (req, res) => {
  res.send('getAllTrades');
};

const deleteTrade = async (req, res) => {
  res.send('getAllTrades');
};

export { createNewTrade, deleteTrade, updateTrade, getAllTrades };
