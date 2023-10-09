const { Router } = require('express');
const itemController = require('../controllers/itemController');

const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});

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
router.post('/', upload.single('image'), itemController.createItem);

// router.post('/mul', upload.single('image'));

//상품 수정 라우터
router.patch('/:item_id', upload.single('image'), itemController.updateItem);

//상품 삭제 라우터
router.delete('/:item_id', itemController.deleteItem);

module.exports = router;
