const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modles/user');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, number } = req.body;
    const user = new User({
        name, // full name
        email, // general
        number, // phone number
        password // length of minimum 8 charecter
    });
    try {
        // find such an user do exhists or not
        const userDoExists = await User.findOne({ email });
        // if do exists
        if (userDoExists) return res.status(400).json({ errors: [{ msg: 'User already exhists' }] });

        // if do not exists
        // --gen salt of 10 rounds
        const salt = await bcrypt.genSalt(10);
        // --hash password
        user.password = await bcrypt.hash(password, salt);
        // save user
        await user.save();
        // --gen jwt
        const token = jwt.sign(
            {
                user: {
                    id: user.id
                }
            },
            process.env.JWT_KEY,
            { expiresIn: 360000 }
        );
        return res.status(200).json({ token });
    } catch (e) {
        return res.status(500).send();
    }
};

module.exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
        // fine user by email
        const user = await User.findOne({ email });
        // check if the user does exists or not
        if (!user) {
            return res.status(401).json({ errors: [{ msg: 'Invalid Credential' }] });
        }
        // check the password
        const isMatch = await bcrypt.compare(password, user.password);
        // if the password don't match
        if (!isMatch) {
            return res.status(401).json({ errors: [{ msg: 'Invalid Credential' }] });
        }
        // if the password does match
        // --create token
        const token = jwt.sign(
            {
                // make payload
                user: {
                    id: user.id
                }
            },
            process.env.JWT_KEY,
            { expiresIn: 360000 }
        );
        return res.status(200).json({ token });
    } catch (e) {
        return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
    }
};

module.exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(400).send('no profile found');
        }
        return res.json(user);
    } catch (e) {
        return res.status(500).send('server error');
    }
};
