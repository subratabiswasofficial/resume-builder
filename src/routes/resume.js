const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const resumeBuilder = require('../controllers/resume-builder');

// @route   POST api/resume/create
// @desc    build resume by data
// @access  Private
router.post('/create', resumeBuilder.createResume);

// @route   GET api/resume/fetch
// @desc    download resume
// @access  Public
router.get('/fetch/:id', resumeBuilder.fetchPdf);

module.exports = router;
