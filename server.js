const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.set('views','views');
app.listen(process.env.PORT ||3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res,next) => {
    res.render('index');
})