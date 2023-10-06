const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const passportLocal = require('./middlewares/passportLocal');
const passportJwt = require('./middlewares/passportJwt');
const userRouter = require('./routes/userRouter');
const orderRouter = require('./routes/orderRouter');

const categoryRouter = require('./routes/category-router');
const itemRouter = require('./routes/item-router');

const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('MongoDB에 연결되었습니다.');
  })
  .catch((error) => {
    console.error('MongoDB 연결 실패:', error);
  });

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

passportLocal();
passportJwt();

app.use('/api/users', userRouter);

app.use('/order', orderRouter);

app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});

app.use('/categories', categoryRouter);
app.use('/items', itemRouter);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening Port on ${process.env.PORT}`);
});
