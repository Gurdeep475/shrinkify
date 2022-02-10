const mongoose = require('mongoose');
const nanoId = require('nanoid').nanoid;
const Schema = mongoose.Schema;

const shrinkSchema = Schema({
    fullUrl: {type: String,required: true},
    shortUrl: {type: String,required: true,default: nanoId},
    clicks: {type: Number,required: true},
})


module.exports = mongoose.model('shrink',shrinkSchema);