const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Qualification = require('../model/qualification')



router.post('/qualification',(req,res)=>{
    const qualification = new Qualification({
       
         qualification:req.body.qualification

    })

    qualification.save()
    .then(result=>{
        res.status(200).json({
            qualification_list:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


router.get('/qualification',(req,res)=>{
    Qualification.find()
    .then(result=>{
        res.status(200).json({
            qualification_data:result
        })
    })
  .catch(err=>{
      res.status(500).json({
          error:err
      })
  })
})

module.exports = router