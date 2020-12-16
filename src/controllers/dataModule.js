const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../../data/data.json");
const file = readFile(filePath);
let content = file && JSON.parse(file) || []; //найди катлог и распарсь его или создай новый массив



function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath); //читаем файл
    }
}

function jsonContent(content) {
    const jsonContent = JSON.stringify(content, null, 2);  //записываем в файл
    fs.writeFileSync(filePath, jsonContent);
}

module.exports = {
    jsonContent,
    content
}