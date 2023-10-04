const { Router } = require('express');
const { Category } = require('../models');
const { Item } = require('../models');
const { itemService } = require('../services/item-service');
const asyncHandler = require('../utils/async-handler');

const router = Router();

//상품 생성 라우터
router.post('/', async (req, res) => {
  console.log('상품 추가 라우터!');
  const data = req.body;

  try {
    //새로운 상품 생성
    const newItem = await Item.create({
      name: data.name,
      category: data.category,
      price: data.price,
      description: data.description,
    });

    //추가 성공시 응답
    res.status(201).json({ status: 'success', msg: '새로운 상품이 추가되었습니다.', data: newItem });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      msg: '상품 추가 중 에러가 발생했습니다.',
      error: error.message,
    });
  }
});

//상품 상세 조회 라우터
router.get('/', async (req, res) => {
  console.log('상품 정보 확인 라우터!');
  try {
    //URL에서 파라미터 shortId 추출
    const itemName = req.query.name;
    // const { shortId } = req.params;

    //해당 shortId를 가진 item 조회
    const item = await Item.findOne({ name: itemName });
    // const item = await Item.findOne({ shortId }); shortId로 하려고 했는데 postman으로 url 어떻게 해야할지 몰라서 name으로 일단 테스트!

    res.status(200).json({
      status: 'success',
      msg: '아이템 조회 성공!',
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      msg: '상품 조회 중 에러가 발생했습니다.',
      error: error.message,
    });
  }
});

module.exports = router;
