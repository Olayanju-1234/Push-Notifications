// subscriber routes
const router = require('express').Router();

const subscribeController = require('../controller/subscribeController');

// subscribe route
router.post('/subscribe', subscribeController);

module.exports = router;