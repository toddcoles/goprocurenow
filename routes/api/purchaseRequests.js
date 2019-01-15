const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile model
const PurchaseRequest = require('../../models/PurchaseRequests');

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
    const { errors, isValid } = validateProfileInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const purchaseFields = {};
    purchaseFields.user = req.user.id;
    if (req.body.handle) purchaseFields.handle = req.body.handle;
    if (req.body.company) purchaseFields.company = req.body.company;
    if (req.body.website) purchaseFields.website = req.body.website;
    if (req.body.location) purchaseFields.location = req.body.location;
    if (req.body.bio) purchaseFields.bio = req.body.bio;
    if (req.body.status) purchaseFields.status = req.body.status;
    if (req.body.githubusername)
      purchaseFields.githubusername = req.body.githubusername;

    // Skills - split into array
    if (typeof req.body.skills !== 'undefined') {
      purchaseFields.skills = req.body.skills.split(',');
    }
    // Social links
    purchaseFields.social = {};

    if (req.body.youtube) purchaseFields.social.youtube = req.body.youtube;
    if (req.body.twitter) purchaseFields.social.twitter = req.body.twitter;
    if (req.body.facebook) purchaseFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) purchaseFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) purchaseFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: purchaseFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: purchaseFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save profile
          new Profile(purchaseFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
