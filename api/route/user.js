const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const res = require('express/lib/response');
const user = require('../model/user');

router.post('/signup',(req,res)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err)
        {
            return res.status(500).json({
                error:err
            })
        }
        else
        {
            const user = new User({
                phone:req.body.phone,
                password:hash
            })

            user.save()
            .then(result=>{
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })
        }
    })
})

router.post('/login',(req,res)=>{
    User.find({phone:req.body.phone})
    .exec()
    .then(user=>{
        if(user.length < 1)
        {
            return res.status(401).json({
                msg:"user not exist"
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(!result)
            {
                return res.status(401).json({
                    msg:"password matching failed"
                })
            }
            if(result)
            {
                 const token = jwt.sign({
                     phone:user[0].phone,
                     
                 },
                  'this is dummy text',
                  {
                      expiresIn:"24h"
                  }
                 );
                 res.status(200).json({
                     phone:user[0].phone,
                     token:token
                 })
            }
        })
    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})






module.exports = router