const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send('Not authorised');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded.user;
        next();
    } catch (e) {
        return res.status(401).send('Not authorised');
    }
};
