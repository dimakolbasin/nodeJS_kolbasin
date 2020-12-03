const readline = require('readline');
/*const fs = require("fs");
const path = require("path");*/

const {catalog} = require('./catalog')

/*const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath)
const content = file && JSON.parse(file) || [];*/

async function deleteProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false

    });

    let answer
    answer = await getInput(rl);
    delete catalog[answer];

    const jsonContent = JSON.stringify(catalog, null, 2);
    /*fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);*/


}

function getInput(rl) {
    return new Promise(resolve => {
        rl.question("Введите ID товара который следует удалить: ", answer => {
            resolve(answer);
        })
    })
}



/*function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
    }


}*/

module.exports = {
    deleteProduct
}