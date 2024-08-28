const express = require('express');
const router= express.Router();
const zod= require('zod');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User= require('../models/userModel');
dotenv.config();
const signupBody= zod.object({
    email: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string() 
})

router.post('/signup', async (req, res) => {
    const result = signupBody.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
          error: 'Invalid input: ' + result.error.issues.map(issue => issue.message).join(', ')
        });
      }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(400).json({
            error: "User already exists"
        });
    }

    const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    
    const userId = user._id;
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);

    res.json({
        message: "User created",
        token: token
    });
});

const signinBody= zod.object({
    email: zod.string().email(),
    password: zod.string() 
})

router.post('/signin',async(req, res) => {
    const {success}= signinBody.safeParse(req.body)
    if(!success){
        return res.status(400).json({
            error: 'Invalid input: '+ success.error.issues.map(issue=>issue.message).join(', ')
        })
    }
    try{
        const user = await User.findOne({
            email: req.body.email
        })
        if(!user){
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }
        if(user){
            const userId =user._id
            const token = jwt.sign({
                userId
            }, process.env.JWT_SECRET)
            
            res.json({
            message: 'Logged in successfully',
            token: token
        })
        }
        
    }catch(e){
        return res.status(500).json({
            error: 'Server error'
        })
    }
})

module.exports = router;





