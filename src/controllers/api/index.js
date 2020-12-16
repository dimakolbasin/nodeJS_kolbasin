const { Router } = require('express');
const catalogController = require('./catalog.controller');

const router = new Router();

router.use('/catalog', catalogController);

module.exports = router;