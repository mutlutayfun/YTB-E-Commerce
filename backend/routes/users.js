const express = require('express');
const router = express.Router();
const User = require('../models/User');


//Tüm kullanıcıları getir.(GettAll() fonksiyonu)
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({error:"Kullanıcılar getirilirken hata oluştu."});
    }
});
//belirli kullanıcı getirme (Get() fonksiyonu)
router.get('/:userId', async (req, res) => {
    try{     
        const userId = req.params.userId;
        try{
            const users = await User.findById(userId);
            res.status(200).json(users);
        }
        catch(error){
            res.status(404).json({error:"Kullanıcı bulunamadı."});
        }
    }
    catch(error){
    res.status(500).json({error:"Sunucu hatası."});
}
});

//Kullanıcı güncelleme (Update() fonksiyonu)
router.put('/:userId', async (req, res) => {
    try{
        const userId = req.params.userId;
        const updateInfo = req.body;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({error: "Kullanıcı bulunamadı"});
        }
        const updatedUser = await User.findByIdAndUpdate(userId, updateInfo, {new:true});
        res.status(200).json(updatedUser);
    }
    catch(error){
        res.status(500).json({error :"Kullanıcı güncellenirken hata oluştu."});
    }
});

//Kullanıcı silme (Delete() fonksiyonu)
router.delete('/:userId', async (req, res) => {
    try{
        const userId = req.params.userId;
        const userDeleted = await User.findByIdAndDelete(userId);
        if(!userDeleted){
            return res.status(404).json({error:"Kullanıcı bulunamadı."});
        }
        res.status(200).json({userDeleted, message: "Kullanıcı silindi."});
    }
    catch(error){
        res.status(500).json({error:"Kullanıcı silinirken hata oluştu."});
    }
});

// Kullanıcı maile göre silme işlemi
router.delete('/email/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const userDeleted = await User.findOneAndDelete({ email });

        if (!userDeleted) {
            return res.status(404).json({ error: "Kullanıcı bulunamadı." });
        }
        res.status(200).json({ userDeleted, message: "Kullanıcı silindi." });
    } catch (error) {
        res.status(500).json({ error: "Kullanıcı silinirken hata oluştu." });
    }
});

module.exports = router;