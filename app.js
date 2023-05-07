const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Route
const subscribeRoute = require('./routes/subscribe');

const app = express();

// set static path
app.use(express.static(path.join(__dirname, 'client')));

// body parser middleware
app.use(bodyParser.json());

// route
app.use('/', subscribeRoute);

// port
const port = process.env.PORT || 5000;

// listen
app.listen(port, () => console.log(`Server started on port ${port}`));


