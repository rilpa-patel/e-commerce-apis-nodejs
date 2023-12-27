const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { Product , Cart, createOrder, productreview} = require('../models');
const { authService, userService, tokenService, emailService } = require('../services');

const getproduct = catchAsync(async (req, res) => {
   
    const product = await Product.find({});
    console.log(product);
   return res.send({ status: 200, data: product });
});

const createCart = catchAsync(async (req, res) => {
    const cart = await Cart.create(req.body);
    console.log(cart);
   return res.send({ status: 200, data: cart });
});

const placeOrder = catchAsync(async (req, res) => {
  const order = await createOrder.create(req.body);
  console.log(order);
 return res.send({ status: 200, data: order });
});

const updateOrder = catchAsync(async (req, res) => {
    const updateOrder = await createOrder.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status }, { new: true })
    .then((doc) => {
        if (doc) {
          console.log('Updated document:', doc);
        } else {
          console.log('Document not found.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(updateOrder);
    return res.send({ status: 200, data: updateOrder})
})

const createReview = catchAsync(async (req, res) => {
    const review = await productreview.create(req.body)
    return res.send({ status: 200, data: review});
})

const getReview = catchAsync(async (req, res) => {
    const review = await productreview.find({})
    return res.send({ status: 200, data: review});
})

const getReviewUsingID = catchAsync(async (req, res) => {
  console.log(req.query.productID);
    const review = await productreview.findById(req.query.productID);
    return res.send({ status: 200, data: review});
})

module.exports = {
    getproduct,
    createCart,
    placeOrder,
    updateOrder,
    createReview,
    getReview,
    getReviewUsingID
}