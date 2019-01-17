const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const ProgramsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  programName: {
    type: String
  },
  serviceCenter: {
    // LATER CHANGE THIS TO TYPE: Schema.Types.ObjectId, ref: ServiceCenter
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
    // required: true,
  },
  state: {
    type: String
    // required: true
  },
  zip: {
    type: String
    // required: true
  },
  country: {
    type: String
  },
  uniqueId: {
    // Used for PR number creation
    type: String
    // required: true
  },
  initialPoP: {
    type: Date
    // required: true
  },
  endPoP: {
    type: Date
    // required: true
  }
});

module.exports = Programs = mongoose.model('programs', ProgramsSchema);
