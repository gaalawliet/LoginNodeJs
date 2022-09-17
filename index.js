// Importa bibliotecas
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session');

const port = 5000;
const path = require('path');
const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'login')));

// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //instalar biblioteca ejs
app.set('view engine', 'html');


app.post('/', (request, response) => {

    console.log("post")
    if (request.body.login == 'gaa' && request.body.password == 'lawliet') {
        response.sendFile('C:/Users/mateu/Documents/PRP/Code/LoginNodeJs/login/index.html')
    } else {
        response.send("Erro no login")
    }
})

app.post('/login', (request, response) => {

    console.log(request.body.username)
    console.log(request.body.password)

    // console.log("postando")
    // console.log("login:", request.body)
    // console.log("senha:", response.body)

    // if (request.body.login == 'gaa' && request.body.password == 'lawliet') {
    //     response.sendFile('C:/Users/mateu/Documents/PRP/Code/LoginNodeJs/login/index.html')
    // } else {
    //     response.send("Erro no login")
    // }
})

app.get('/login', (request, response) => {
    response.render("index");
    console.log(request.body.username);
    console.log(request.body.password)
    console.log("teste")
})

app.get('/post', (request, response) => {
    response.render("index");
    console.log("teste")
})

app.listen(port, () => {
    console.log('servidor rodando');
})

function login() {
    alert("voce fez login");
}