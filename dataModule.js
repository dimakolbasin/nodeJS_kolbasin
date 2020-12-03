const catalog = require('./data/data.json');
const readline = require('readline');
const fs = require("fs");
const path = require("path");


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
    catalog,
    getInput,
    readFile
}