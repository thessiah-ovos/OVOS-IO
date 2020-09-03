import mongoose from 'mongoose';
const billingSchema = {
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
};

const paymentSchema = {
  paymentMethod: { type: String, required: true }
};

const agreementSchema = {
  agreementStatus: { type: String, required: true }
}

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
 // qty: { type: Number, required: true },
  lease: { type: String, required: true},
  image: { type: String, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  payment: paymentSchema,
  agreement: agreementSchema,
  itemsPrice: { type: Number },
  lease: { type: String },
  taxPrice: { type: Number },
  billingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date }, 
}, {
  timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;