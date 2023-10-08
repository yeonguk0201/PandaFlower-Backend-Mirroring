const { Category, Item } = require('../models');

class ItemService {
  constructor() {}

  async addItem(data) {
    //새로운 상품 생성
    const newItem = await Item.create({
      name: data.name,
      category: data.category,
      price: data.price,
      description: data.description,
    });
    return newItem;
  }
}

const itemService = new ItemService();

module.exports = itemService;
// module.exports = { addItem };
