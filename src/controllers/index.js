const express = require('express');
const router = express.Router();

const search = require('./search');
const error = require('./error');

router.post('/search', search)
router.use(error.client)
router.use(error.server)


module.exports = router;

