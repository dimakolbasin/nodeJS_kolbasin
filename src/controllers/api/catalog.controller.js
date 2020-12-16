const { Router } = require('express');
const router = new Router();

const catalog = require('../../../data/data.json');

const {addProduct, changeProduct, findProductId} = require('../changeCatalog.js');



router.get('/', (request, response) => {
    response.json(catalog);
});

router.get('/:id', (request, response) => {
    const findProduct = findProductId(request.params.id);
    if (findProduct) {
        response.json(findProduct);
        return;
    }
    response.status(404);
    response.redirect('/');
});


router.post('/', (request, response) => {
    const newProduct = addProduct(request.body);
    response
        .status(201)
        .json(newProduct);
});

module.exports = router;