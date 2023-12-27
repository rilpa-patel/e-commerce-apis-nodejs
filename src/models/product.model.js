const mongoose = require('mongoose');


const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    discription: {
      type: String,
      required: true,
    },
   price: {
    type: Number,
    required: true
   }
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model('product', productSchema, 'product');

module.exports = Product;
