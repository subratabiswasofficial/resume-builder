const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userAuth = require('../controllers/user');
const auth = require('../middleware/auth');

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post(
    '/register',
    [check('name', 'Please enter a name').not().isEmpty(), check('email', 'Please enter a valid email').isEmail(), check('password', 'Please enter a long password').isLength({ min: 6 })],
    userAuth.registerUser
);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', [check('email', 'Please enter a valid email').isEmail(), check('password', 'Please enter a password').exists()], userAuth.loginUser);

// @route   GET api/auth/getuser
// @desc    User data route
// @access  Private
router.get('/getuser', auth, userAuth.getUser);

// export
module.exports = router;
