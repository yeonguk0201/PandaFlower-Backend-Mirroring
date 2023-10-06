const { Schema } = require('mongoose');

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
});

module.exports = subCategorySchema;
