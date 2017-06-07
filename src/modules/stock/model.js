import mongoose, { Schema } from 'mongoose';

const StockSchema = new Schema({
  symbol: {
    type: String,
    required: true,
  },
  lastPrice: {
    type: String,
    required: true,
  },
  marketTime: {
    type: Date,
    required: false,
  },
  percentChange: {
    type: String,
    required: false,
  },
}, { timestamps: true });

export default mongoose.model('Stock', StockSchema);
