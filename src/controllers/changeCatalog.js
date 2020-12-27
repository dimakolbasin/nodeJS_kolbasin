const {jsonContent, content} = require('./dataModule.js');

function addProduct(product) {

    content.push(product);

    let arrNew = content.map((item, index) => {
        return {id: index, name: item.name, price: Number(item.price), count: item.count};
    })

    jsonContent(arrNew);
}

function changeProduct(product, productID) {
    content[productID] = (product);

    let arrNew = content.map((item, index) => {
        return {id: index, name: item.name, price: Number(item.price), count: item.count};
    })

        jsonContent(arrNew);
}

function patchProduct(product, productID) {


    content[productID] = {...content[productID], ...product};

    let arrNew = content.map((item, index) => {
        return {id: index, name: item.name, price: Number(item.price), count: item.count};
    })

    jsonContent(arrNew)

}

function deleteProduct(productID) {

    delete content[productID];

    let filterArr = content.filter(function(item) {
        return item != null;
    });

    let arrNew = filterArr.map((item, index) => {
        return {id: index, name: item.name, price: Number(item.price), count: item.count};
    })

    jsonContent(arrNew);
}

function findProductId(id) {
    return content.find(product => product.id == [id]);
}

module.exports = {
    addProduct,
    changeProduct,
    findProductId,
    patchProduct,
    deleteProduct
}
