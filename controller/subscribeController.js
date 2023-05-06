const { StatusCodes } = require('http-status-codes');
const webPush = require('web-push');
require('dotenv').config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
   'mailto:test@test.com',
   publicVapidKey,
   privateVapidKey
);

// subscribe controller
const subscribeController = (req, res) => {
    const subscription = req.body;

    // send 201 - resource created
    res.status(StatusCodes.CREATED).json({});

    // create payload
    const payload = JSON.stringify({ title: 'Push Test' });

    // pass object into sendNotification
    webPush.sendNotification(subscription, payload)
        .catch(err => console.error(err));
};

module.exports = subscribeController;
