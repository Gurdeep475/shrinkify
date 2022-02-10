
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/home');
const mongoose = require('mongoose'); 
const { connected } = require('process');
const key = require('./private/secretKeys');


app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',homeRoutes);

mongoose.connect(key)
.then((result) => {
    console.log("connected");
    app.listen(3000);
})