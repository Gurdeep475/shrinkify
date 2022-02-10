const mongoose = require('mongoose');
const nanoId = require('nanoid').nanoid;
const Schema = mongoose.Schema;

const initialValue = () => {
    return 0;
}

const generateshortUrl = () => {
    return nanoId();
}


const shrinkSchema = Schema({
    fullUrl: {type: String,required: true},
    shortUrl: {type: String,required: true,default: generateshortUrl},
    clicks: {type: Number,required: true,default: initialValue},
})


module.exports = mongoose.model('shrink',shrinkSchema);