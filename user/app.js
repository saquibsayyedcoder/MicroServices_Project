const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes'); 
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connect = require('./db/db')


dotenv.config();
connect();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const morgan = require('morgan');

app.use('/',userRoutes )
module.exports = app