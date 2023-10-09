const { Router } = require('express');
const userController = require('../controllers/categoryController');

const router = Router();

//카테고리 조회 라우터
router.get('/', userController.allCategory);

//카테고리 생성 라우터
router.post('/', userController.createCategory);

//카테고리 수정 라우터
router.patch('/:category_id', userController.updateCategory);

//카테고리 삭제 라우터
router.delete('/:category_id', userController.deleteCategory);
module.exports = router;
