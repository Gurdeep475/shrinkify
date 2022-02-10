const Shrink = require('../models/shrink');
const nanoId = require('nanoid').nanoid;

exports.getHomePage = (req,res,next) => {
    console.log("I am in get Home Page");
    console.log(req.url);
    // fetch from database
    Shrink.find()
    .then(shrinks => {
        console.log(shrinks);
        res.render('index',{shrinks:shrinks}); //passing our table info here
    })
}
    

exports.postHomePage = (req,res,next) => {
    const fullUrl = req.body.fullUrl;
    console.log(fullUrl);
    const shrink = Shrink({fullUrl: fullUrl});

    shrink.save()
    .then(result => {
        console.log("Inserted");
        res.redirect('/');
    })
    .catch(err => console.log(err));
}