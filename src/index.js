const express = require('express');
const path = require('path');
const controllers = require('./controllers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers); //указываем папку в которой лежит index.js

/*app.get('/', function (req, res) {
    res.send('ss12312321312sssd12323dasds');
})*/

app.listen(3000, function () {
    console.log('сервер запущен');
})