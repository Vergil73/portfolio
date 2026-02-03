require('dotenv').config();

const express = require('express');
const app = express();

// ejs templates
app.set('view engine', 'ejs');

// serves static files
app.use(express.static('public'));

const homepage = require('./routes/homepageRoute');
app.use('/', homepage);

app.listen(process.env.PORT ||3000, () => {
    console.log(`Server Is Running On The Port ${process.env.PORT || 3000}`);
});