const readline = require('readline');
const fs = require("fs");
const path = require("path");

const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath)
const content = file && JSON.parse(file) || [];

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

    content.push({
        product: product,
        count: count,
        price: price
    });

    const jsonContent = JSON.stringify(content, null, 2);
    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
}


function getInput(rl) {
    return new Promise(resolve => {
        rl.question("Ввод: ", answer => {
            resolve(answer);
        })
    })
}


function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
    }

}


module.exports = {
    addProduct
}
