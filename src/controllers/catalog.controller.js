const { Router } = require('express');

const catalog = require('../../data/data.json');

const {addProduct, changeProduct} = require('./changeCatalog.js');


const router = new Router();

router.get('/', (request, response) => {
    response.render('pages/catalog/view', { catalog });
});

router.get('/add', (request, response) => {
    response.render('pages/catalog/add');
});


router.post('/add',(request, response) => {
    addProduct(request.body);
    response.redirect('/');
});


router.get('/change', (request, response) => {
    response.render('pages/catalog/change');
});


router.post('/change',(request, response) => {
    changeProduct(request.body, request.body.id);
    response.redirect('/');
});


module.exports = router


