const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const passportLocal = require('./middlewares/passportLocal');
const passportJwt = require('./middlewares/passportJwt');

const userRouter = require('./routes/userRouter');
const orderRouter = require('./routes/orderRouter');
const categoryRouter = require('./routes/categoryRouter');
const subCategoryRouter = require('./routes/subCategoryRouter');
const itemRouter = require('./routes/itemRouter');
const cartRouter = require('./routes/cartRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('MongoDB에 연결되었습니다.');
  })
  .catch((error) => {
    console.error('MongoDB 연결 실패:', error);
  });

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

passportLocal();
passportJwt();

app.use('/users', userRouter);

app.use('/categories', categoryRouter);

app.use('/subcategories', subCategoryRouter);

app.use('/items', itemRouter);

app.use('/cart', cartRouter);

app.use('/order', orderRouter);

app.use('/admin', adminRouter);

app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening Port on ${process.env.PORT}`);
});
