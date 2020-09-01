import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  artist: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  audio: { type: String, required: true },
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;