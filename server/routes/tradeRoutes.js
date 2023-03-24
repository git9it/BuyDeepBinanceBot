import express from 'express';
const router = express.Router();

import {
  createNewTrade,
  getAllTrades,
  getSingleTrade,
  deleteTrade,
  updateTrade,
} from '../controllers/tradeController.js';

router.route('/').post(createNewTrade).get(getAllTrades);
router.route('/:id').get(getSingleTrade).delete(deleteTrade).patch(updateTrade);

export default router;
