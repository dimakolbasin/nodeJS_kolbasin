const readline = require('readline');
const fs = require("fs");
const path = require("path");
const {catalog, getInput, readFile, jsonContent, rl} = require('./dataModule');
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath);
let content = file && JSON.parse(file) || [];

async function changeProduct() {
    console.log("Введите ID изменяемого товара");
    let answer = await getInput(rl);

    console.log("Введите имя товара");
    let product = await getInput(rl);
    console.log("Введите кол-во товара");
    let count = await getInput(rl);
    console.log("Введите цену товара");
    let price = await getInput(rl);

    let newProductData = ({
        product: product,
        count: count,
        price: price
    });

    catalog[answer] = newProductData;
    content = [...catalog];
    jsonContent(content);
}




module.exports = {
    changeProduct
}