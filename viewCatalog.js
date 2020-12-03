let {catalog} = require('./dataModule');

function viewCatalog() {

    console.table(catalog);

}


module.exports = {
    viewCatalog
}
