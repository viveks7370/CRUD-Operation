const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const studentModel = require('./Models/Student');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud_operation');

app.get('/',(req,res)=>{
    studentModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.post('/create',(req,res)=>{
    studentModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.get('/fetchData/:id',(req,res)=>{
    const id = req.params.id;
    studentModel.findOne({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.listen(4001,()=>{
    console.log('Server is Running!!');
})