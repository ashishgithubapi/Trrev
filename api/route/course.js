const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../model/course')



router.post('/course',(req,res)=>{
    const course = new Course({
       
         course:req.body.course

    })

    course.save()
    .then(result=>{
        res.status(200).json({
            course_list:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

router.get('/course',(req,res)=>{
    Course.find()
    .then(result=>{
        res.status(200).json({
            course_data:result
        })
    })
  .catch(err=>{
      res.status(500).json({
          error:err
      })
  })
})

module.exports = router