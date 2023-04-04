import mongoose from 'mongoose';

const TradeSchema = new mongoose.Schema(
  {
    pair: {
      type: String,
      required: [true, 'Please provide pair'],
      maxlength: 8,
    },
    buyPrice: {
      type: String,
      required: [true, 'Please provide buy price'],
      maxlength: 12,
    },
    sellPrice: {
      type: String,
      required: [true, 'Please provide sell price'],
      maxlength: 12,
    },
    amountToSell: {
      type: String,
      required: [true, 'Please provide amount to sell price'],
      maxlength: 12,
    },
    binanceTradeID: {
      type: String,
      maxlength: 22,
    },
    status: {
      type: String,
      enum: ['Active', 'Processing', 'Paused', 'Canceled', 'Completed'],
      default: 'Active',
    },
    error: {
      type: String,
    },
    buyTrade: {
      type: mongoose.Types.ObjectId,
      ref: 'Trade',
      required: [true, 'Please provide a trade'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('SellTrade', TradeSchema);
