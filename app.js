const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const cartRouter = require('./routes/cartRouter');
const errorMiddleware = require('./middlewares/middleWare');

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
  
app.use('/cart',cartRouter);




app.listen(process.env.PORT, () => {
  console.log(`Server is listening Port on ${process.env.PORT}`);
});


