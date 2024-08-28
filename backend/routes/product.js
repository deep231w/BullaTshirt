const express= require('express');
const zod = require('zod');
const router = express.Router();
const Product = require('../models/productModel');

const productSchema = zod.object({
    name: zod.string(),
    price: zod.number(),
    description: zod.string(),
    quantity: zod.string(),
    imageUrl: zod.string()
});

//create product
router.post("/",async(req, res) => {
    const existingProduct = await Product.findOne({
        name : req.body.name
    })
    if (existingProduct){
        return res.status(400).json({success: false, error: "Product already exists"});
    }

    try{
        const product =  await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            imageUrl: req.body.imageUrl
        })
        res.json({
            success: true, 
            product: product
        });
    }catch(e){
        return res.status(500).json({success: false, error: "Server Error"});
    }
})

//get all product
router.get("/", async(req, res) => {
    try{
        const products = await Product.find({});
        res.json({
            success: true,
            products: products
        });
    }
    catch(e){
        return res.status(500).json({success: false, error: "Server Error"});
    }
})

//get single product

router.get('/:id', async(req, res) => {
    try{
        const product =  await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({success: false, error: "Product not found"});
        }
        res.json({
            success: true,
            product: product
        });
    }
    catch(e){
        return res.status(500).json({success: false, error: "Server Error"});
    }
})

module.exports = router;