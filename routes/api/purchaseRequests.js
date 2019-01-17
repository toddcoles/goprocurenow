const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile model
const PurchaseRequests = require('../../models/PurchaseRequests');

// @route   GET api/purchase/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Purchase Requests work' }));

// @route   POST api/purchase
// @desc    Create or edit purchase request
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // const { errors, isValid } = validatePurchaseInput(req.body);

    // Check validation
    // if (!isValid) {
    //   // Return any errors with 400 status
    //   return res.status(400).json(errors);
    // }

    // Get fields
    const purchaseFields = {};
    purchaseFields.user = req.user.id;
    if (req.body.serviceCenter)
      purchaseFields.serviceCenter = req.body.serviceCenter;
    if (req.body.program) purchaseFields.program = req.body.program;
    if (req.body.title) purchaseFields.title = req.body.title;
    if (req.body.status) purchaseFields.status = req.body.status;
    if (req.body.commodity) purchaseFields.commodity = req.body.commodity;
    if (req.body.chargeCode) purchaseFields.chargeCode = req.body.chargeCode;
    if (req.body.costElement) purchaseFields.costElement = req.body.costElement;
    if (req.body.productService)
      purchaseFields.productService = req.body.productService;
    if (req.body.purchaseOrderNum)
      purchaseFields.purchaseOrderNum = req.body.purchaseOrderNum;
    if (req.body.dateRequired)
      purchaseFields.dateRequired = req.body.dateRequired;
    if (req.body.requestor) purchaseFields.requestor = req.body.requestor;
    if (req.body.buyer) purchaseFields.buyer = req.body.buyer;
    if (req.body.procurementType)
      purchaseFields.procurementType = req.body.procurementType;
    // // if (req.body.vendor) purchaseFields.vendor = req.body.vendor;

    purchaseFields.vendor = {};

    if (req.body.vendorName)
      purchaseFields.vendor.vendorName = req.body.vendorName;
    if (req.body.vendorNum)
      purchaseFields.vendor.vendorNum = req.body.vendorNum;
    if (req.body.poc) purchaseFields.vendor.poc = req.body.poc;
    if (req.body.street) purchaseFields.vendor.street = req.body.street;
    if (req.body.city) purchaseFields.vendor.city = req.body.city;
    if (req.body.state) purchaseFields.vendor.state = req.body.state;
    if (req.body.zip) purchaseFields.vendor.zip = req.body.zip;

    purchaseFields.items = {}; // THIS MAY NEED TO HAVE A MODAL FORM TO ADD ALL FIELDS OR USE AN ARRAY FROM THE FORM
    if (req.body.qty) purchaseFields.items.qty = req.body.qty;
    if (req.body.unit) purchaseFields.items.unit = req.body.unit;
    if (req.body.price) purchaseFields.items.price = req.body.price;
    if (req.body.currency) purchaseFields.items.currency = req.body.currency;
    if (req.body.description)
      purchaseFields.items.description = req.body.description;
    if (req.body.tax) purchaseFields.items.tax = req.body.tax;
    if (req.body.freight) purchaseFields.items.freight = req.body.freight;

    // PurchaseRequest.findOne({ user: req.user.id }).then(pr => {
    //   if (pr) {
    //     // Update
    //     PurchaseRequest.findOneAndUpdate(
    //       { user: req.user.id },
    //       { $set: purchaseFields },
    //       { new: true }
    //     ).then(pr => res.json(pr));
    //   } else {
    // Create

    // Check if handle exists
    // PurchaseRequest.findOne({ user: purchaseFields.user }).then(pr => {
    // if (pr) {
    //   errors.handle = 'That handle already exists';
    //   res.status(400).json(errors);
    // }

    // Save profile
    new PurchaseRequests(purchaseFields)
      .save()
      .then(purchase => res.json(purchase));
    // });
  }
  // });
  // }
);

module.exports = router;
