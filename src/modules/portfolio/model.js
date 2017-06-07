import mongoose, { Schema } from 'mongoose';

const PortfolioSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be 5 characters long.'],
  },
  stocks: [{
    type: Schema.Types.ObjectId,
    ref: 'Stock',
  }],
}, { timestamps: true });

export default mongoose.model('Portfolio', PortfolioSchema);
