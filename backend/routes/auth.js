const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Deneme get
router.get('/register',async (req, res) => {
    res.send('Auth sayfası');
});

// Kullanıcı kayıt (register)
router.post('/register', async (req, res) => {
    try{
        const {username,email,password} = req.body;
        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.status(400).json({error:"Bu email adresi ile daha önce kayıt olunmuş."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({username,email,password : hashedPassword});
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(error){
        response.status(500).json(error="Kullanıcı eklenirken hata oluştu.");
    }

});

// Kullanıcı giriş (login)
router.post('/login', async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({error:"Geçersiz e-mail adresi."});
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return res.status(401).json({error:"Hatalı şifre."});
        }
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role : user.role
        });
    }
    catch(error){
        response.status(500).json(error="Kullanıcı girşinde hata oluştu.");
    }
});

module.exports = router;