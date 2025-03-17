require('dotenv').config({ path: './config/config.env' });

const express = require('express');
const app = express();

const dot =require('dotenv');
const path= require('path');
const connectDatabase = require('./config/connectDatabase');

dot.config({path: path.join(__dirname,'config', 'config.env')});

const products = require('./routes/product');   
const orders = require('./routes/order');   

const cors = require('cors');

connectDatabase();

app.use(express.json());

app.use('/api/v1', products);
app.use('/api/v1', orders);
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});