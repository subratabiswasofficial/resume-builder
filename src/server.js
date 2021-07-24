const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const logging = require('./config/logging');
require('dotenv').config();

/** connect Database */
require('./config/connectDb')();

/** middleware */
app.use(cors());
app.use(express.json());
// app.use(fileUpload());

/** Logging the request */
const NAMESPACE = 'SERVER';
app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});

/** Routes */
app.use('/api/auth', require('./routes/user'));
app.use('/api/resume', require('./routes/resume'));

/** Setup */
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

/** App listener */
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(`${PORT}`, () => {
    logging.info(NAMESPACE, `RUNNING AT PORT - [${PORT}] ENV MODE - [${NODE_ENV}]`);
});
