const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.get("/api/login", (req, res) => {
  res.json({ message: "Welcome to the API! login" });
});

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
