const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv')

const app = express();

// Route
const subscribeRoute = require('./routes/subscribe');

// body parser middleware
app.use(bodyParser.json());


// route
app.use('/', subscribeRoute);


// port
const port = process.env.PORT || 5000;

// listen
app.listen(port, () => console.log(`Server started on port ${port}`));


