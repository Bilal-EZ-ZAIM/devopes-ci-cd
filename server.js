const express = require("express");
const app = express();
const PORT = 3000;

const apiRoutes = require("./app");

app.use(express.json());

app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
