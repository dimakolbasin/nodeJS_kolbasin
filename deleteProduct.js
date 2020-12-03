const readline = require('readline');
const fs = require("fs");
const path = require("path");
const {catalog, getInput, readFile, jsonContent} = require('./dataModule');
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath);
let content = file && JSON.parse(file) || [];
const {rl} = require('./dataModule');

async function deleteProduct() {

    let answer = await getInput(rl);
    delete catalog[answer];
    content = [];
    catalog.forEach(element => content.push(element));
    jsonContent(content);
}


module.exports = {
    deleteProduct
}