
const express = require('express');
const router = express();
const path = require('path');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_ku',{useNewUrlParser:true});
let db = mongoose.connection;

db.on('error',()=>console.log('terjadi error'));
db.once('open',()=> {
  console.log('berhasil konek');
})

router.listen(5000,()=> console.log('sedang berjalan di port 5000'));
