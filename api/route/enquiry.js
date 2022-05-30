const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Enquiry  = require('../model/enquiry');

router.post('/enquiry',(req,res)=>{
    const enquiry = new Enquiry({
       
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        phone:req.body.phone,
        age:req.body.age,
        course:req.body.course,
        qualification:req.body.qualification,
        enquirydate:req.body.enquirydate,
        followupdate:req.body.followupdate,
        remark:req.body.remark

    })

    enquiry.save()
    .then(result=>{
        res.status(200).json({
            enquiry_list:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


router.get('/get-enquiry',(req,res)=>{
      Enquiry.find()
      .then(result=>{
          res.status(200).json({
              enquiry_data:result
          })
      })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})



module.exports = router