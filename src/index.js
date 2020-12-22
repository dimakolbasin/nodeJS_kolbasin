const express = require('express');
const path = require('path');
const controllers = require('./controllers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers); //указываем папку в которой лежит index.js для контроллеров

app.use(express.static(path.resolve(__dirname, 'public')));


app.listen(3000, function () {
    console.log('сервер запущен на 3000 порту');
})