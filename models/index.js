const mongoose = require('mongoose');
const CategorySchema = require('./schemas/category-schema');
const SubCategorySchema = require('./schemas/subCategory-schema');
const ItemSchema = require('./schemas/item-schema');

exports.Category = mongoose.model('Category', CategorySchema);
exports.Item = mongoose.model('Item', ItemSchema);
exports.SubCategorySchema = mongoose.model('SubCategorySchema', SubCategorySchema);
