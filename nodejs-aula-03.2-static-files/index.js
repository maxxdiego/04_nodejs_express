// Importando o Express (CommonJS Modules)
const express = require("express") 
// Iniciando o Express
const app = express() 

// Definindo o EJS para renderizar páginas
app.set('view engine', 'ejs') 
// Define a pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Criando a primeira rota do site (ROTA PRINCIPAL)
app.get("/", function (req, res) {
    res.render('index') // Será renderizada a página 'views\index.ejs'
})

// ROTA PERFIL 
app.get("/perfil", function (req, res) {
    res.render('perfil')
})

// ROTA VÍDEOS
app.get("/videos", function (req, res) {
    res.render('videos')
})

// ROTA PRODUTOS
app.get("/produtos/:produto?", function (req, res) {
    produto = req.params.produto
    // Array com os produtos
    produtos = ['Computador', 'Celular', 'Tablet', 'Notebook'] 
    res.render('produtos', {
    // Enviando as variáveis para página HTML
        produto : produto,
        produtos : produtos
    })
})

// ROTA PEDIDOS
app.get("/pedidos", function (req, res) {
    // Array de objetos com os pedidos
    var pedidos = [ 
        {produto: "Celular", preco: 3000},
        {produto: "Computador", preco: 4000},
        {produto: "Tablet", preco: 2000},
        {produto: "Notebook", preco: 3800},
    ]
    res.render('pedidos', {
    // Enviando o array de objetos para página HTML
        pedidos : pedidos
    })
})

// Iniciando o servidor na porta 8080
app.listen(8080, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})