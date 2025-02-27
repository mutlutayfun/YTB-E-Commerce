const express = require('express');
const Coupon = require('../models/Coupon');
const router = express.Router();

//Kupon ekleme
router.post('/', async (req, res) => {
    try {
        const coupon = new Coupon(req.body);
        await coupon.save();
        return res.status(201).json({coupon});
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Tüm kuponları getirme
router.get('/', async (req, res) => {
    try {
        const coupons = await Coupon.find();
        return res.status(200).json({coupons});
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Tek bir kupon getirme
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const coupon = await Coupon.findById(id);
        if (!coupon) {
            return res.status(404).json({ error: "Kupon bulunamadı..." });
        }
        return res.status(200).json({coupon});
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Kupon güncelleme
router.put('/:id', async (req, res) => {
    try {
        const coupon = req.params.id;
        const updateInfo = req.body;
        if (!coupon) {
            return res.status(404).json({ error: "Kupon bulunamadı..." });
        }
        const updatedCoupon = await Coupon.findByIdAndUpdate
        (coupon, updateInfo, { new: true });
        return res.status(200).json({ updatedCoupon , message: "Kupon güncellendi" });
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Kupon silme
router.delete('/:id', async (req, res) => {
    try {
        const coupon = req.params.id;
        const deletedCoupon = await Coupon.findByIdAndDelete(coupon);
        if (!deletedCoupon) {
            return res.status(404).json({ error: "Kupon bulunamadı..." });
        }
        return res.status(200).json({ deletedCoupon,message: "Kupon silindi" });
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası..." });
    }
});

module.exports = router;
