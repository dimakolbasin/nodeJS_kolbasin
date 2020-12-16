const { Router } = require('express');

const router = new Router();

router.get('/', (request, response) => {
    response.render('pages/home.ejs');
});

module.exports = router;