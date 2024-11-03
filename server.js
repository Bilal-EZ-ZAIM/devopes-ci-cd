const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurer Express pour servir les fichiers HTML
app.use(express.static(path.join(__dirname, "public")));

// Configurer la route pour la page d'accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
