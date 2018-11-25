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

app.post('/edit/:id',(req,res)=>{
    let id = req.params.id;
    let objekku = {
        nama:req.body.nama,
        umur:req.body.umur,
        pendidikan:req.body.pendidikan,
        alamat:req.body.alamat,
    }
    User.findById(id,(err,user)=> {
        if(!err) {
            const { nama, umur, pendidikan, alamat} = objekku;
            user.set({nama,umur,pendidikan,alamat});
            user.save((err,updated)=>{
                if(!err) {
                    console.log(`updated ${updated}`)
                } else {
                    console.log(`terjadi kesalahan ${err}`)
                }
            })
        } else {
            console.log(`terjadi kesalahann ${err}`);
        }
    })
})

app.post('/add_user',(req,res)=> {
    let data_user = {
        nama:req.body.nama,
        umur:req.body.umur,
        pendidikan:req.body.pendidikan,
        alamat:req.body.alamat,
    }
    const {nama,umur,pendidikan,alamat} = data_user;

    User.insertMany([{nama,umur,pendidikan,alamat}],(err,respon)=> {
        if(!err) {
            res.status(200).send(`berhasil menambahkan data ${respon}`)
        } else {
            console.log(`terjadi kesalahan ${err}`)
        }
    })
})

app.post('/delete_user',(req,res)=>{
    let _id = req.body._id;
    User.findByIdAndDelete({_id},(err,respon)=>{
        if(!err) {
            res.send({status:200})
        } else {
            console.log(`terjadi kesalahan ${err}`)
        }
    })
})

app.listen(port,()=>console.log(`berjalan pada port ${port}`));