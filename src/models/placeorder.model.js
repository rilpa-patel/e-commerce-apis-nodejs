const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { list } = require('pm2');
const { number } = require('joi');

const placeOrderSchema = mongoose.Schema(
  {
    products: [
      {
        _id: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        discription: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ],
    totalAmount: {
      type: Number,
      required: true
    },
    status : {
      type : String,
      required : true
    }
  },
  {
    timestamps: true,
  }
);


const placeOrder = mongoose.model('placeOrder', placeOrderSchema);

module.exports = placeOrder;
