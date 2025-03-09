"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importações
var userRoutes_1 = require("./routes/userRoutes");
var express_1 = require("express");
var express = require('express');
var routes = (0, express_1.Router)();
var app = express();
routes.get('/', function (req, res) {
    res.send('Hello Worllklkd!');
});
userRoutes_1.userRoutes.get('/list', userRoutes_1.userRoutes);
userRoutes_1.userRoutes.get('/show/:id', userRoutes_1.userRoutes);
// Registrar as rotas no app
app.use(routes);
// Servidor
app.listen(3700, function () {
    console.log('Server está rodando na porta 3700');
});
