// Importa bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');

const port = 5000;
const path = require('path');
const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'login')));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //instalar biblioteca ejs
app.set('view engine', 'html');

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     database: 'users',
//     port: 3306
// });

app.post('/', (request, response) => {

    // console.log(request.body.username)
    // console.log(request.body.password)

    // let query = "SELECT * FROM users WHERE user='"
    // query += request.body.username
    // query += "'"
    // query += " AND pass='"
    // query += request.body.password
    // query += "'"

    // connection.query(query, function (err, result, fields) {

    //     if (request.body.username == result[0].user && request.body.password == result[0].pass ) {
    //         response.send("Deu bom roscão")
    //     } else {
    //         response.send("Erro no login")
    //     }

    // });
});

app.get('/post', (request, response) => {
    response.render("index");
    console.log("teste")
})


app.listen(port, () => {
    console.log('servidor rodando');
})
