const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    rating: Number,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: Number,
    numReviews: Number,
    createAt: Date
})


const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;