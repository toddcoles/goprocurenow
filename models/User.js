const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  admin: {
    supplychainAdmin: {
      type: Boolean
    },
    financeAdmin: {
      type: Boolean
    },
    itAdmin: {
      type: Boolean
    },
    eshAdmin: {
      type: Boolean
    },
    itarAdmin: {
      type: Boolean
    },
    commodityAdmin: {
      type: Boolean
    }
  }
});

module.exports = User = mongoose.model('users', UserSchema);
