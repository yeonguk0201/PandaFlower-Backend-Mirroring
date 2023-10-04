const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./routes');
const categoryRouter = require('./routes/category-router');
const itemRouter = require('./routes/item-router');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', indexRouter);
// app.use('/category', categoryRouter);
app.use('/item', itemRouter);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening Port on ${PORT}`);
});
