"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const billingSchema = {
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
};
const paymentSchema = {
  paymentMethod: {
    type: String,
    required: true
  }
};
const agreementSchema = {
  agreementStatus: {
    type: String,
    required: true
  }
};
const orderItemSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  // qty: { type: Number, required: true },
  lease: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  product: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});
const orderSchema = new _mongoose.default.Schema({
  user: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [orderItemSchema],
  payment: paymentSchema,
  agreement: agreementSchema,
  itemsPrice: {
    type: Number
  },
  price: {
    type: Number
  },
  lease: {
    type: String
  },
  taxPrice: {
    type: Number
  },
  billingPrice: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  deliveredAt: {
    type: Date
  }
}, {
  timestamps: true
});

const orderModel = _mongoose.default.model("Order", orderSchema);

var _default = orderModel;
exports.default = _default;