const orderModel = require('../models/orderModel');

exports.createOrder =(req,res, next) => {

    // const cartItems = req.body.cartItems;
    // const amount = cartItems.reduese( (acc,item) => (acc + item.product.price * item.qty),0); 
    
    //console.log(amount , 'AMOUNT');
    console.log(req.body , 'DATA');

    orderModel.create(req.body);
    res.json({
        success: true,
        message: 'Create order working!'
    })  
}