const { Schema } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    // required: true,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
  },
});

module.exports = categorySchema;
