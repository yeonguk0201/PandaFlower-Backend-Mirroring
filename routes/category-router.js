const { Router } = require('express');
const { Category, SubCategorySchema, Item } = require('../models');
const asyncHandler = require('../utils/catchAsync');

const router = Router();

//카테고리 조회 라우터
router.get('/', async (req, res, next) => {
  console.log('전체 카테고리 조회 라우터!');
  try {
    const categories = await Category.find({});
    return res.status(200).json({
      status: 200,
      msg: '전체 카테고리 조회',
      data: categories,
    });
  } catch (error) {
    next(error);
  }
});

//카테고리 생성 라우터
router.post('/', async (req, res, next) => {
  console.log('카테고리 추가 라우터!');
  const { name, index } = req.body;
  if (!name || name === '') {
    return res.status(400).json({
      status: 400,
      msg: '이름이 없습니다.',
    });
  }

  try {
    // 카테고리 이름으로 만든 item들을 arr 배열에 담음
    let arr = [];
    const items = await Item.find({ category: name });
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      //_id는 mongoDB에서 자동으로 생성되는 식별자로 있는거만 push
      if (items[i]._id) {
        arr.push(items[i]._id);
      }
    }

    const checkName = await Category.findOne({ name });
    const checkIndex = await Category.findOne({ index });
    if (checkName) {
      throw new Error('이미 존재하는 카테고리 이름입니다.');
    }
    if (checkIndex) {
      throw new Error('이미 존재하는 카테고리 인덱스입니다.');
    }

    //새로운 카테고리 생성하는데 위에서 만든 arr를 카테고리 안의 items로 담는다
    const newCategory = await Category.create({
      name,
      index,
      items: arr,
    });

    //추가 성공시 응답
    res.status(201).json({ status: 'success', msg: '새로운 카테고리가 추가되었습니다.', data: newCategory });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      msg: '카테고리 추가 중 에러가 발생했습니다.',
      error: error.message,
    });
  }
});

//카테고리 수정 라우터
router.patch('/:category_id', async (req, res, next) => {
  console.log('카테고리 수정 라우터!');
  try {
    const { category_id } = req.params;

    const updateData = req.body;

    const updateCategory = await Category.findByIdAndUpdate(category_id, updateData, { new: true });

    if (!updateCategory) {
      res.status(404).json({ status: 'error', msg: '카테고리를 찾을 수 없습니다.' });
    }

    const currentCategory = await Category.findOne({ category: category_id });

    await Item.updateMany({ category: currentCategory }, { category: updateData.name });

    res.status(200).json({ status: 200, msg: '카테고리 수정 성공!', data: { category: updateCategory } });
  } catch (error) {
    return res.status(500).json({ status: 'error', msg: '카테고리 수정 중 에러가 발생했습니다.', error: error.message });
  }
});

//카테고리 삭제 라우터
router.delete('/:category_id', async (req, res, next) => {
  console.log('카테고리 삭제 라우터!');

  try {
    const { category_id } = req.params;

    const deleteCategory = await Category.findOneAndDelete({ _id: category_id });

    if (!deleteCategory) {
      return res.status(404).json({ status: 404, msg: '해당 카테고리가 없습니다!' });
    }

    res.status(200).json({ status: 200, msg: '카테고리 삭제 성공!', data: deleteCategory });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: '카테고리 삭제 중 에러가 발생했습니다.', error: error.message });
  }
});

module.exports = router;
