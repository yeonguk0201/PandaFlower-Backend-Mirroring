const { Router } = require('express');
const Item = require('../models/item/itemSchema');
const itemController = require('../controllers/itemController');
const catchAsync = require('../utils/catchAsync');

const router = Router();

//상품 검색 라우터 get
router.get('/search', itemController.searchItems);

//카테고리 상품 조회 라우터
router.get('/category/:category_id', itemController.findCategoryItems);

//상품 상세 조회 라우터
router.get('/:item_id', itemController.detailItem);

//아이템 조회 라우터
router.get('/', itemController.allItems);

//상품 생성 라우터
router.post('/', itemController.createItem);

//상품 수정 라우터
router.patch('/:item_id', itemController.updateItem);

//상품 삭제 라우터
router.delete('/:item_id', itemController.deleteItem);

module.exports = router;
