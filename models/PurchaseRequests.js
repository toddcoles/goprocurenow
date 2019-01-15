const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const PurchaseRequestSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  serviceCenter: {
    type: String
  },
  program: {
    type: String
  },
  title: {
    type: String,
    required: true,
    max: 140
  },
  status: {
    type: String,
    required: true
  },
  commodity: {
    type: String,
    required: true
  },
  chargeCode: {
    type: String,
    max_length: 50
  },
  costElement: {
    type: Number,
    max_length: 10
  },
  productService: {
    type: String,
    required: true
  },
  purchaseOrderNum: {
    type: String,
    required: true
  },
  dateRequired: {
    type: Date,
    required: true
  },
  requestor: {
    type: String,
    required: true
  },
  buyer: {
    type: String,
    required: true
  },
  procurementType: {
    type: String,
    required: true
  },
  vendor: {
    vendorName: {
      type: String,
      max_length: 50
    },
    vendorNum: {
      type: Number,
      max_length: 8
    },
    poc: {
      type: String,
      max_length: 50
    },
    street: {
      type: String
    },
    city: {
      type: String,
      max_length: 25
    },
    state: {
      type: String,
      max_length: 50
    },
    zip: {
      type: String,
      max_length: 10
    }
  },
  deliveryLocation: {
    poc: {
      type: String,
      max_length: 50
    },
    street: {
      type: String
    },
    city: {
      type: String,
      max_length: 25
    },
    state: {
      type: String,
      max_length: 50
    },
    zip: {
      type: String,
      max_length: 10
    }
  },
  terms: {
    type: String,
    max_length: 20
  },
  purchaseOrderNum: {
    type: String,
    required: true
  },
  items: [
    {
      qty: {
        type: Number,
        required: true
      },
      unit: {
        type: String,
        required: true,
        max_length: 10
      },
      price: {
        type: Number,
        required: true,
        min: 0
      },
      currency: {
        type: String
      },
      description: {
        type: String,
        max_length: 140
      },
      tax: {
        type: Number
      },
      freight: {
        type: Number
      }
    }
  ],
  approvals: {
    ohsApproval: {
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: Date,
      comment: String
    },
    itApproval: {
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: Date,
      comment: String
    },
    financeApproval: {
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: Date,
      comment: String
    },
    itarApproval: {
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: Date,
      comment: String
    },
    hrApproval: {
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: Date,
      comment: String
    },
    qaApproval: {
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: Date,
      comment: String
    },
    koApproval: {
      name: String,
      date: Date,
      comment: String
    },
    acoApproval: {
      name: String,
      date: Date,
      comment: String
    },
    pmApproval: {
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: Date,
      comment: String
    }
  },
  comment: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = PurchaseRequests = mongoose.model(
  'purchaseRequests',
  PurchaseRequestSchema
);
