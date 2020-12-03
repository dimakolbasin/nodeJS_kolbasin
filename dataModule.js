const catalog = require('./data/data.json');
const readline = require('readline');


function getInput(rl) {
    return new Promise(resolve => {
        rl.question("Ввод: ", answer => {
            resolve(answer);
        })
    })
}

module.exports = {
    catalog,
    getInput
}