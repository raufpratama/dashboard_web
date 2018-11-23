const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const User = require('./schema/userLengkapSchema');

mongoose.connect('mongodb://localhost/db_user',{useNewUrlParser:true});
let db = mongoose.connection;

db.on('error',()=> console.log('terjadi kesalahan'));
db.once('open',()=> console.log('berhasil terhubung'));

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

app.get('/get_data',(req,res)=> {
    User.find({},(err,response)=> {
        if(!err) {
            res.send(response);
        } else {
            console.log(`terjadi kesalahan ${err}`);
        }
    })
})

app.get('/edit/:id',(req,res)=> {
    User.find({_id:req.params.id},(err,response)=>{
        if(!err) {
            res.send(JSON.stringify(response));
        } else {
            console.log(`terjadi kesalahan ${err}`);
        }
    })
})

app.listen(port,()=>console.log(`berjalan pada port ${port}`));