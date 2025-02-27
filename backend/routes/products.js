const express = require('express');
const Product = require('../models/Product');
const router = express.Router();


// router.get('/', async (req, res) => {
//     res.send('Ürün Listesi');
// });

//Yeni ürün ekleme
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.status(201).json({product});
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
        
    }
});

//Tüm ürünleri listeleme
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({products});
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Ürün getirme
router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Ürün bulunamadı..." });
        }
        return res.status(200).json({product});
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Ürün güncelleme
router.put('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const updateInfo = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Ürün bulunamadı..." });
        }
        const updatedProduct = await Product.findByIdAndUpdate(productId, updateInfo, { new: true });
        //new true dersek güncellenmiş halini döner. False dersek eski halini döner.
        return res.status(200).json({updatedProduct});
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası" });
    }
});

//Ürün silme
router.delete('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Ürün bulunamadı..." });
        }
        return res.status(200).json({deletedProduct,message:"Ürün başarıyla silindi..."});
    } 
    catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

module.exports = router;