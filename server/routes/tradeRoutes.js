import express from 'express';
const router = express.Router();

import {
  createNewTrade,
  getAllTrades,
  getSingleTrade,
  deleteTrade,
  updateTrade,
  cancelTrade,
} from '../controllers/buyTradeController.js';

router.route('/').post(createNewTrade).get(getAllTrades);
router.route('/:id').get(getSingleTrade).delete(deleteTrade).patch(updateTrade);
router.route('/cancel/:id').patch(cancelTrade);

export default router;
