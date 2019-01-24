const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const CommoditySchema = new Schema({
  commodityType: {
    type: String
  },
  description: {
    type: String
  },
  commodityCode: {
    type: String,
    max_length: 50
  }
});

module.exports = Commodity = mongoose.model('commodity', CommoditySchema);
