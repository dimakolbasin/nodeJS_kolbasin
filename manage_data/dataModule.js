const catalog = require('./data/data.json');
const readline = require('readline');
const fs = require("fs");
const path = require("path");
const dirPath = path.resolve(__dirname, "data");
const filePath = path.resolve(dirPath, "data.json");
const file = readFile(filePath);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function getInput(rl) {
    return new Promise(resolve => {
        rl.question("Ввод: ", answer => {
            resolve(answer);
        })
    })
}

function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath); //читаем файл
    }

}

function jsonContent(content) {
    const jsonContent = JSON.stringify(content, null, 2);  //записываем в файл
    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
}

module.exports = {
    catalog,
    getInput,
    readFile,
    jsonContent,
    rl
}