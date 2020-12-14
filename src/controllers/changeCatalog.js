const {jsonContent, content} = require('./dataModule.js');

function addProduct(product) {
    content.push(product);
    jsonContent(content);
}

function changeProduct(product, productID) {
        content[productID] = (product);
        jsonContent(content);

}

module.exports = {
    addProduct,
    changeProduct
}
