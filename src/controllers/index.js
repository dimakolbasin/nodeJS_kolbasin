const { Router } = require('express');
const homeController = require('./home.controller');
const catalogController = require('./catalog.controller');
const apiControllers = require('./api');

const router = new Router();

router.use('/', homeController);
router.use('/admin', catalogController);
router.use('/api', apiControllers);

module.exports = router;