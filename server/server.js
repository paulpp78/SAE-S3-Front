// Importation des modules requis
const express = require("express"); // Express est un framework web pour Node.js

const app = express();
const path = require("path"); // Module pour gérer les chemins de fichiers
const cors = require("cors"); // Middleware pour gérer les requêtes CORS
const fs = require("fs"); // Module pour la gestion des fichiers
const configFile = fs.readFileSync("config.json", "utf8"); // Lire le fichier de configuration
const config = JSON.parse(configFile); // Analyser le fichier de configuration en JSON

// Configuration du middleware
app.use(express.json()); // Active le parsing automatique des données JSON dans les requêtes

app.use(cors({ origin: config.corsConf })); // Active la gestion des requêtes CORS

// Configuration des fichiers statiques
app.use(express.static(path.join(__dirname, config.staticDirectory))); // Définit le répertoire statique

// Configuration des routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, config.staticDirectory, config.firstPage)); // Envoie la page d'accueil statique
});

// Démarrage du serveur
app.listen(config.port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${config.port}`);
});
