const readline = require('readline');

const {catalog} = require('./dataModule');
const {getInput} = require('./dataModule');
const {readFile} = require('./dataModule');

const fs = require("fs");
const path = require("path");

const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath)
let content = file && JSON.parse(file) || [];

async function addProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

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

    content = [];
    content.push(catalog);

    const jsonContent = JSON.stringify(catalog, null, 2);
    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);

}



module.exports = {
    addProduct
}
