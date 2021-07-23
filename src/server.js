const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

/**  */
const auth = require('./middleware/auth');

/** connect Database */
require('./config/connectDb')();

/** middleware */
app.use(express.json());
// app.use(fileUpload());

/** Routes */
app.use('/api', require('./api/routes/users'));
app.use('/api', require('./routes/posts'));

/** Setup */
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "..", "client", "build", "index.html")
//     );
//   });
// }

app.listen(process.env.PORT || 5000, () => {
    process.env.PORT ? console.log('Env utilized') : console.log('Env not utilized');
    console.log(`server running on ${process.env.PORT || 5000}`);
});
