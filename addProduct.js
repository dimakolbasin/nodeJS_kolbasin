const readline = require('readline');
const {catalog, getInput, readFile, jsonContent, rl} = require('./dataModule');
const fs = require("fs");
const path = require("path");
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath)
let content = file && JSON.parse(file) || [];

async function addProduct() {


    console.log("Введите имя товара");
    let product = await getInput(rl);
    console.log("Введите кол-во товара");
    let count = await getInput(rl);
    console.log("Введите цену товара");
    let price = await getInput(rl);

    catalog.push({
        product: product,
        count: count,
        price: price
    });
    content = [...catalog];
    jsonContent(content);
}

module.exports = {
    addProduct
}
