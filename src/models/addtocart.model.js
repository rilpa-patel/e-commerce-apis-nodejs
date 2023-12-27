const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const cartSchema = mongoose.Schema(
  {
    // _id:{
    //   type: String,
    //   required: true,
    // },
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


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
