// Importa bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');



// Define porta utilizada
const port = 5000;

// Ajuda na manipulação de diretórios (caminhos de arquivos)
const path = require('path');

// Referencia o express que gerencia rotas na variável app
const app = express();

// Inicia sessão
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Permite ler json
app.use(express.json());

//
app.engine('html', require('ejs').renderFile); //instalar biblioteca ejs

// Permite ler o body
app.use(bodyParser.urlencoded({ extended: true }));

// Exibe página (principal)
app.use(express.static(path.join(__dirname, 'main')));

// Disponibiliza arquivos do utilizados no index.html da tela de login
app.use(express.static(path.join(__dirname, 'login')));

// Define como reagir à uma request de POST
app.post('/login', (request, response) => {

    // Verfiica se o usuário e a senha constam no "banco"
    if (request.body.username == 'mat' && request.body.password == '1234' ) {
        request.session.loggedin = true;
        request.session.username = request.body.username;
        response.redirect('/main');     
    } 
    
    // Se não estiver cadastrado apresenta mensagem de erro
    else {
            response.send("Erro no login")
    }   
    
});


// Exibe página de bem-vindo
app.get('/welcome', (request, response) => {
  
    if (request.session.loggedin) { 

		response.sendFile(__dirname + '/main/indexLogged.html'); 
	} else {
        
		response.sendFile(__dirname + '/main/index.html'); 
	}

});

// Desloga
app.get('/sair', (request, response) => {
  
    if (request.session.loggedin) {
		request.session.loggedin = false;
        response.redirect('/welcome')
	} 

    else {
        
		response.sendFile(__dirname + '/main/index.html'); 
	}

});

// Mostra a principal visão do site
app.get('/main', (request, response) => {

    if (request.session.loggedin) {
        
		response.sendFile(__dirname + '/main/indexLogged.html');

	} 

    else {
        
		response.send('Please login to view this page!');
	}
    
})

// Mostra tela de login
app.get('/login', (request, response) => {

    response.sendFile(__dirname + '/login/index.html');

})

// Fica sempre atento à requests na porta 5000
app.listen(port, () => {
    console.log('servidor rodando');
})
