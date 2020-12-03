const readline = require('readline');
const fs = require("fs");
const path = require("path");

const {catalog} = require('./dataModule')
const {getInput} = require('./dataModule')

const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath)
let content = file && JSON.parse(file) || [];

async function deleteProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false

    });

    let answer
    answer = await getInput(rl);
    delete catalog[answer];
    content = []
    content.push(catalog);

    const jsonContent = JSON.stringify(content, null, 2);
    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);


}



function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
    }

}

module.exports = {
    deleteProduct
}