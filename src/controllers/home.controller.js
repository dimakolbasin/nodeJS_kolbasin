const { Router } = require('express');

const router = new Router();

const catalog = require('../../data/data.json');

router.get('/', (request, response) => {
    response.render('user/pages/home.ejs', { catalog });
});

module.exports = router;