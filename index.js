// Importa bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Define porta utilizada
const port = 5000;

// Ajuda na manipulação de diretórios (caminhos de arquivos)
const path = require('path');

// Referencia o express que gerencia rotas na variável app
const app = express();

// Permite ler json
app.use(express.json());

// Permite ler o body
app.use(bodyParser.urlencoded({ extended: true }));

// Exibe página de login
app.use(express.static(path.join(__dirname, 'login')));

// Define como reagir à uma request de POST
app.post('/', (request, response) => {

    // Responde à request com um "ok"
    response.send("ok");

});

// Fica sempre atento à requests na porta 5000
app.listen(port, () => {
    console.log('servidor rodando');
})
