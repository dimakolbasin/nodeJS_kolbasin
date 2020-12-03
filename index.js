/*const readline = require('readline');*/
const {addProduct} = require('./addProduct');
const {viewCatalog} = require('./viewCatalog');
const {deleteProduct} = require('./deleteProduct');
const {changeProduct} = require('./changeProduct');
const {rl} = require('./dataModule');


askQuestion();

async function askQuestion () {
    console.log(
        " 0.    Выход       \n" +
        " 1. Список товаров \n" +
        " 2. Добавить товар \n" +
        " 3. Удалить товар  \n" +
        " 4. Изменить товар  \n");

    rl.question('выберите действие: ', (answer) => {
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
            console.log('удаление товара по ID\n');
            await deleteProduct();
            console.log('товар удален');
            askQuestion();
            break;

        case 4:
            console.log('изменение товара\n');
            await changeProduct();
            console.log('товар изменен');
            askQuestion();
            break;

        default:
            console.log('не верный выбор, перезапустите программу и попробуйте еще раз');
            rl.close();
    }
}


