const catalog = require('./data/data.json');

function viewCatalog() {
    console.table(catalog);
}

module.exports = {
    viewCatalog
}
