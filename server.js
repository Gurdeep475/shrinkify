
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/home');
const mongoose = require('mongoose'); 
const { connected } = require('process');

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',routes.homePage);

mongoose.connect("mongodb+srv://gurdeepsingh475475:453113@cluster0.jdu7q.mongodb.net/shrinkify?retryWrites=true&w=majority")
.then((result) => {
    console.log("connected");
    app.listen(3000);
})