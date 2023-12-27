const express = require('express');
const validate = require('../../middlewares/validate');
const { authenticate } = require('passport');
// const authValidation = require('../../validations/auth.validation');
// const authController = require('../../controllers/auth.controller');
// const auth = require('../../middlewares/auth');
const productValidation = require('../../validations/product.valuidate')
const productController = require('../../controllers/produst.controller');
// const { productreview } = require('../../models');

const router = express.Router();

router.get('/getproduct', validate(productValidation.getproduct), productController.getproduct);
router.post('/addCart', validate(productValidation.addtocart), productController.createCart);
router.post('/placeorder', validate(productValidation.placeOrder), productController.placeOrder);
router.put('/orderStatusUpdate', validate(productValidation.updateorderStatus), productController.updateOrder);
router.get('/getreview', productController.getReview);
router.post('/createreview',validate(productValidation.createReviw), productController.createReview);
router.get('/getproductreview', validate(productValidation.getReviewUsiongID), productController.getReviewUsingID)
// router.post('/register', validate(authValidation.register), authController.register);
// router.post('/login', validate(authValidation.login), authController.login);
// router.post('/logout', validate(authValidation.logout), authController.logout);
// router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
// router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
// router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
// router.post('/send-verification-email', auth(), authController.sendVerificationEmail);
// router.post('/verify-email', validate(authValidation.verifyEmail), authController.verifyEmail);

module.exports = router;