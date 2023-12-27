const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { list } = require('pm2');


const reviewSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        reviews: [
            {
                username: {
                    type: String,
                    required: true
                },
                review: {
                    type : String,
                    required: true
                },
                rating: {
                    type: Number,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true,
    }
);


const review = mongoose.model('Productreview', reviewSchema);

module.exports = review;
