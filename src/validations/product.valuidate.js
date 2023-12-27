const Joi = require('joi');

const getproduct = {
    query: Joi.object().keys({
        startingPrice: Joi.number().integer().optional(),
        endingprice: Joi.number().integer().optional(),
        search: Joi.string().optional(),
    }),
}

const addtocart = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        discription: Joi.string().required(),
        price: Joi.number().required(),
    }),
}

const placeOrder = {
    body: Joi.object().keys({
        products: Joi.array().items(
            Joi.object().keys({
                _id: Joi.array().required(),
                name: Joi.string().required(),
                description: Joi.string().required(),
                price: Joi.number().required(),
            })
        ).required(),
        totalAmount: Joi.number().required(),
        status: Joi.string().required()
    }),
    query: Joi.object().keys({
        status: Joi.string().optional()
    })
}

const updateorderStatus = {
    body: Joi.object().keys({
        _id: Joi.string().required(),
        status: Joi.string().required()
    })
}

const getReviewUsiongID = {
    query: Joi.object().keys({
        productID: Joi.string().required()
    })
}

const createReviw = {
    body: Joi.object().keys({
        _id: Joi.string().required(),
        reviews: Joi.array().items(
            Joi.object().keys(
                {
                    username: Joi.string().required(),
                    review: Joi.string().required(),
                    rating: Joi.number().required()

                })
        ).required()
    })
}

module.exports = {
    getproduct,
    addtocart,
    placeOrder,
    createReviw,
    updateorderStatus,
    getReviewUsiongID
}