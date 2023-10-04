const mongoose = require('mongoose');
const CategorySchema = require('./schemas/category-schema');
const ItemSchema = require('./schemas/item-schema');

exports.Category = mongoose.model('Category', CategorySchema);
exports.Item = mongoose.model('Item', ItemSchema);
