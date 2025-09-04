// app.js
const express = require('express');
const app = express();
const path = require("path");
const PORT = 4500; 

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/cardapio", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cardapio.html"));
});

app.get("/pedido", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pedido.html"));
});

app.get("/pagamento", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pagamento.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});