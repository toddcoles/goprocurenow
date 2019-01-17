const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Programs = require('../../models/Programs');

// @route   GET api/programs
// @desc    Tests programs route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Programs works' }));

// @route   POST api/programs
// @desc    Create or edit programs
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
    const programFields = {};
    programFields.user = req.user.id;
    if (req.body.programName) programFields.programName = req.body.programName;
    if (req.body.serviceCenter)
      programFields.serviceCenter = req.body.serviceCenter;
    if (req.body.street) programFields.street = req.body.street;
    if (req.body.city) programFields.city = req.body.city;
    if (req.body.state) programFields.state = req.body.state;
    if (req.body.zip) programFields.zip = req.body.zip;
    if (req.body.country) programFields.country = req.body.country;
    if (req.body.uniqueId) programFields.uniqueId = req.body.uniqueId;
    if (req.body.initialPoP) programFields.initialPoP = req.body.initialPoP;
    if (req.body.endPoP) programFields.endPoP = req.body.endPoP;

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
    new Programs(programFields).save().then(program => res.json(program));
    // });
  }
);

// });
// }

// @route   GET api/programs
// @desc    Get programs
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Programs.find()
      // .sort({ date: -1 })
      .then(programs => res.json(programs))
      .catch(err =>
        res.status(404).json({ noprogramsfound: 'No programs found' })
      );
  }
);

// @route   GET api/programs/:id
// @desc    Get program by id
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Programs.findById(req.params.id)
      .then(program => res.json(program))
      .catch(err =>
        res
          .status(404)
          .json({ noprogramfound: 'No program found with that id' })
      );
  }
);

// @route   DELETE api/programs/:id
// @desc    Delete program
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Programs.findOne({ user: req.user.id }).then(profile => {
      Programs.findById(req.params.id)
        .then(program => {
          // TODO: CHECK FOR ADMIN AUTHORITY
          // if (post.user.toString() !== req.user.id) {
          //   return res
          //     .status(401)
          //     .json({ notauthorized: 'User not authorized' });
          // }
          // Delete
          program.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ programnotfound: 'Program not found' })
        );
    });
  }
);

module.exports = router;
