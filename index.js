const readline = require('readline');
const {addProduct} = require('./addProduct');
const {viewCatalog} = require('./viewCatalog');
const {deleteProduct} = require('./deleteProduct');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

askQuestion();


async function askQuestion () {
    console.log(
        " 0.    Выход       \n" +
        " 1. Список товаров \n" +
        " 2. Добавить товар \n" +
        " 3. Удалить товар  \n");

    rl.question('выберите действие: ', (answer) => {

        /*console.log(`вы выбрали: ${answer}`);*/

        manageAnswer(`${answer}`);


    })
}

async function manageAnswer(answer) {

    switch (parseInt(answer)) {
        case 0:
            rl.close();
            break;

        case 1:
            await viewCatalog();
            askQuestion();
            break;

        case 2:
            console.log('Добавление товара\n');
            await addProduct();
            console.log('товар добавлен');
            askQuestion();
            break;

        case 3:
            console.log('удаление товара\n');
            await deleteProduct();
            askQuestion();
            break;

        default:
            console.log('не работает')
            rl.close();
    }
}


