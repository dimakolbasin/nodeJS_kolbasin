const {jsonContent, content} = require('./dataModule.js');

function addProduct(product) {

    let arrNew = content.map((item, index) => {
        return {id: index, product: item.product, count: item.count, price: item.price};
    })

    content.push(product);
    jsonContent(arrNew);
}

function changeProduct(product, productID) {
        content[productID] = (product);
        jsonContent(content);

}

module.exports = {
    addProduct,
    changeProduct
}
