import mongoose from 'mongoose';

const TradeSchema = new mongoose.Schema(
  {
    pair: {
      type: String,
      required: [true, 'Please provide pair'],
      maxlength: 8,
    },
    timeframe: {
      type: number,
      required: [true, 'Please provide Timeframe'],
      maxlength: 3,
    },
    status: {
      type: String,
      enum: ['Active', 'Canceled', 'Completed'],
      default: 'Active',
    },
    dumpVolume: {
      type: Number,
      required: [true, 'Please provide dump volume'],
      maxlength: 10,
    },
    buyAmount: {
      type: Number,
      required: [true, 'Please provide buy amount'],
      maxlength: 10,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Trade', TradeSchema);
