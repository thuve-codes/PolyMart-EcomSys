const productModel = require('../models/productModel');


//Get products api - /api/v1/products
exports.getProducts=async (req, res, next) => {


    const products = await productModel.find({});

        res.json({
            success: true,
            products
        })

    }
//Get products api - /api/v1/products
    exports.getSingleproduct= async(req, res, next) => {
try{
        console.log(req.params.id,'ID');
        const product= await productModel.findById(req.params.id);

        res.json({
            success: true,
            product
        })
    }catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
}
    } 