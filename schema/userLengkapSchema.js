const mongoose = require('mongoose');

const userLengkapSchema = mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        nama: {
            type:String,
            required:true
        },
        umur: {
            type:String,
            required:true
        },
        pendidikan: {
            type:String,
            required:true
        },
        alamat: {
            type:String,
            required:true
        },
    }
);

let User = module.exports = mongoose.model('User',userLengkapSchema);