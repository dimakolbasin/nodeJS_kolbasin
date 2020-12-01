const catalog = require('./data.json');

const readline = require('readline');



console.log(
    " 1. Список товаров \n" +
    " 2. Добавить товар \n" +
    " 3. Изменить товар \n" +
    " 4. Удалить товар  \n" +
    " 5.    Выход       \n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

delay();





function delay () {
    rl.question('выберите действие: ', (answer) => {


        /*console.log(`вы выбрали: ${answer}`);*/

        qwe(`${answer}`);

        rl.close()


    })
}

function qwe(answer) {
    let answer;
    answer = getInput(rl);
    switch (parseInt(answer)) {
        case 1:
            console.table(catalog);
            break;

        default:
            console.log('не работает')
    }

}



