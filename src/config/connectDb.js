const mongoose = require('mongoose');
const configdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = configdb;
