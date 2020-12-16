const {jsonContent, content} = require('./dataModule.js');

function addProduct(product) {

    content.push(product);

    let arrNew = content.map((item, index) => {
        return {id: index, product: item.product, count: item.count, price: item.price};
    })

    jsonContent(arrNew);
}

function changeProduct(product, productID) {
    content[productID] = (product);

    let arrNew = content.map((item, index) => {
        return {id: index, product: item.product, count: item.count, price: item.price};
    })

        jsonContent(arrNew);

}

function findProductId(id) {
    return content.find(product => product.id == [id]);
}

module.exports = {
    addProduct,
    changeProduct,
    findProductId
}
