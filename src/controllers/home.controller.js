const { Router } = require('express');

const router = new Router();

router.get('/', (request, response) => {
    response.render('user/pages/home.ejs');
});

module.exports = router;