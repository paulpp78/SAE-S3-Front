const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const configFile = fs.readFileSync("config.json", "utf8");
const config = JSON.parse(configFile);

app.use(cors({ origin: config.corsConf }));
app.use(express.json());

app.use(express.static(path.join(__dirname, config.staticDirectory)));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, config.staticDirectory, config.firstPage));
});

app.listen(config.port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${config.port}`);
});
