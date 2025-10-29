// app.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Rota 1 — Página inicial
app.get("/", (req, res) => {
    res.send(`
    <h1>Bem-vindo à aplicação Node.js!</h1>
    <p>Esta é a página inicial.</p>
    <a href="/sobre">Ir para Sobre</a> |
    <a href="/contato">Ir para Contato</a>
  `);
});

// Rota 2 — Sobre
app.get("/sobre", (req, res) => {
    res.send(`
    <h1>Sobre</h1>
    <p>Esta aplicação foi criada como parte de um projeto de ADS.</p>
    <a href="/">Voltar</a>
  `);
});

// Rota 3 — Contato
app.get("/contato", (req, res) => {
    res.send(`
    <h1>Contato</h1>
    <p>Entre em contato pelo e-mail: exemplo@unifor.edu.br</p>
    <a href="/">Voltar</a>
  `);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});