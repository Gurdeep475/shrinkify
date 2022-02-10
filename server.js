
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/home');
const mongoose = require('mongoose'); 
const { connected } = require('process');
const key = require('./private/secretKeys');

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',routes.homePage);

mongoose.connect(key)
.then((result) => {
    console.log("connected");
    app.listen(3000);
})