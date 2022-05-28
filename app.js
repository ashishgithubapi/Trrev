const express = require('express');
const app = express();
const mongoose = require('mongoose')
const DB = 'mongodb+srv://node:WFdIMDy97zrauaIB@cluster0.tiw2d.mongodb.net/trrrev?retryWrites=true&w=majority'
// const studentRoute = require('./api/route/student')
const userRoute = require('./api/route/user')
const enquiryRoute = require('./api/route/enquiry')
const courseRoute = require('./api/route/course')
const qualificationRoute = require('./api/route/qualification')
const bodyParser = require('body-parser');

const morgan = require('morgan');
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/student',studentRoute)
app.use('/user', userRoute)
app.use('/data', enquiryRoute)
app.use('/list', courseRoute)
app.use('/degree', qualificationRoute)
// app.use((req,res)=>{
//     res.status(200).json({
//         message:'this is app js'
//     })
// })

// mongoose.connect('mongodb://localhost:27017/technical')
//     .then(() => {
//         console.log("mongodb is started now")
//     }).catch(() => {
//         console.log("mongodb error")
//     })

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log('connection successfullllll');
}).catch((err)=>{
    console.log(err);
});

module.exports = app