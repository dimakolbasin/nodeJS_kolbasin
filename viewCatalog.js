let {catalog} = require('./catalog');

function viewCatalog() {

    console.table(catalog);

}


module.exports = {
    viewCatalog
}
