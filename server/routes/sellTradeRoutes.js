///api/v1/selltrades/
import express from 'express';
const router = express.Router();

import {
  getAllSellTrades,
  getSingleSellTrade,
  deleteSellTrade,
  updateSellTrade,
  cancelSellTrade,
} from '../controllers/sellTradeController.js';

router.route('/').get(getAllSellTrades);
router.route('/:id').get(getSingleSellTrade).delete(deleteSellTrade).patch(updateSellTrade);
router.route('/cancel/:id').patch(cancelSellTrade);

export default router;
