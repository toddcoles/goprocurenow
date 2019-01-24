const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const AccountingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  program: {
    type: Schema.Types.ObjectId,
    ref: 'programs'
  },
  description: {
    type: String
  },
  ELIN: {
    type: String
  },
  jobNumber: {
    type: String
  },
  chargeCode: {
    type: String,
    max_length: 50
  },
  costElement: {
    type: Number,
    max_length: 10
  }
});

module.exports = Accounting = mongoose.model('accounting', AccountingSchema);
