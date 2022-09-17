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

//
app.engine('html', require('ejs').renderFile); //instalar biblioteca ejs

// Permite ler o body
app.use(bodyParser.urlencoded({ extended: true }));

// Exibe página de login
app.use(express.static(path.join(__dirname, 'login')));
app.use(express.static(path.join(__dirname, 'main')));

// Define como reagir à uma request de POST
app.post('/', (request, response) => {

    // Responde à request com um "ok"
    // response.sendFile(path.join(__dirname, 'login'))
    // response.send("post")
    // response.sendFile(__dirname + '/cube/index.html');
    response.sendFile(__dirname + '/main/index.html');
    
});

app.get('/main', (request, response) => {

    response.sendFile(__dirname + '/main/index.html');
    // response.send("get")
    console.log("get")

})

// Fica sempre atento à requests na porta 5000
app.listen(port, () => {
    console.log('servidor rodando');
})
