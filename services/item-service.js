const { Category, Item } = require('../models');

class ItemService {
  constructor() {}

  //상품 추가 서비스
  // async addItem(data) {
  //   const { category } = data;
  //   const isCategory = await Category.findOne({ name: category });
  //   if (!isCategory) {
  //     throw new Error('해당 카테고리는 없습니다.');
  //   }

  //   const newItem = await Item.create(data);

  //   await Category.updateOne({ name: category }, { $push: { items: newItem.id } });
  //   return newItem;
  // }

  //상품 상세 페이지 데이터 리턴
  // async detailViewItem(findId) {
  //   const findItem = await Item.findById({ _id: findId });
  //   return findItem;
  // }
}

const itemService = new ItemService();

module.exports = itemService;
