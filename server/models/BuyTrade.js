import mongoose from 'mongoose';

const TradeSchema = new mongoose.Schema(
  {
    pair: {
      type: String,
      required: [true, 'Please provide pair'],
      maxlength: 8,
    },
    timeFrame: {
      type: Number,
      required: [true, 'Please provide Timeframe'],
      maxlength: 3,
    },
    status: {
      type: String,
      enum: ['Active', 'Paused', 'Canceled', 'Completed', 'Error'],
      default: 'Active',
    },
    volumeSold: {
      type: Number,
      required: [true, 'Please provide dump volume'],
      maxlength: 10,
    },
    amountToBuy: {
      type: Number,
      required: [true, 'Please provide buy amount'],
      maxlength: 12,
    },
    sellProcent: {
      type: Number,
      required: [true, 'Please provide sell percent'],
      maxlength: 3,
    },
    error: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      // required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Trade', TradeSchema);
