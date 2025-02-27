const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

//Tüm kategorileri getir.(GettAll() fonksiyonu)
router.get('/', async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }
    catch(error){
        res.status(500).json({error:"Kategoriler getirilirken hata oluştu."});
    }
});
//belirli kategori getirme (Get() fonksiyonu)
router.get('/:categoryId', async (req, res) => {
    try{
        const categoryId = req.params.categoryId;
        try{
            const category = await Category.findById(categoryId);
            res.status(200).json(category);
        }
        catch(error){
            res.status(404).json({error:"Kategori bulunamadı."});
        }
        
    }
    catch(error){
        res.status(500).json({error:"Sunucu hatası."});
    }
});

//Yeni kategori ekleme (Add() fonksiyonu)
router.post('/', async (req, res) => {
    try{
        const {name,img} = req.body;
        const newCategory = new Category({name,img});
        await newCategory.save();
        res.status(201).json(newCategory);
    }
    catch(error){
        response.status(500).json(error="Kategori eklenirken hata oluştu.");
    }
});

//Kategori güncelleme (Update() fonksiyonu)
router.put('/:categoryId', async (req, res) => {
    try{
        const categoryId = req.params.categoryId;
        const updateInfo = req.body;

        const category = await Category.findById(categoryId);
        if(!category){
            return res.status(404).json({error: "Kategori bulunamadı"});
        }
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updateInfo, {new:true});
        res.status(200).json(updatedCategory);
    }
    catch(error){
        res.status(500).json({error :"Kategori güncellenirken hata oluştu."});
    }
});

//Kategori silme (Delete() fonksiyonu)
router.delete('/:categoryId', async (req, res) => {
    try{
        const categoryId = req.params.categoryId;
        const deletedCategory = await Category.findById(categoryId);
        if(!deletedCategory){
            return res.status(404).json({error: "Kategori bulunamadı"});
        }
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json({ deletedCategory,message: "Kategori başarıyla silindi."});
    }
    catch(error){
        res.status(500).json({error: "Kategori silinirken hata oluştu."});
    }
});    
module.exports = router;