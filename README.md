# SaeFront

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Prérequis

Avant de cloner ce projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) : Plateforme permettant d'exécuter du code JavaScript côté serveur.
- [npm](https://www.npmjs.com/) (Node Package Manager) : Gestionnaire de paquets pour Node.js, utilisé pour installer les dépendances du projet.
- [Angular CLI](https://angular.io/cli) : Interface de ligne de commande pour Angular, qui facilite la création, le développement et le déploiement d'applications Angular.
- [Git](https://git-scm.com/) : Système de contrôle de version utilisé pour cloner le projet et gérer les modifications du code source.

## Introduction

Ce projet Angular est une application front-end de refonte du site de la communauté d'agglomération de La Porte du Hainaut.
Dans ce README, nous expliquerons comment cloner le projet, l'exécuter en local, et quelques informations importantes sur la structure du projet.

## Cloner le projet

Pour cloner ce projet sur votre machine locale, assurez-vous d'avoir Git installé. Ensuite, exécutez la commande suivante :

```bash
git clone <git@github.com>:paulpp78/SAE-S3-Front.git main
```

Une fois le projet cloné, accédez au répertoire du projet à l'aide de la commande `cd` :

```bash
cd SaeFront
```

## Installer les dépendances

Pour installer les dépendances nécessaires, exécutez la commande suivante à la racine du projet :

```bash
npm install
```

## Serveur de développement

Pour lancer le serveur de développement, exécutez la commande suivante :

```bash
ng serve
```

Cela démarrera un serveur de développement et l'application sera accessible à l'adresse : `<http://localhost:4200/`>. L'application sera automatiquement rechargée si vous modifiez des fichiers source.

## Structure du projet

Le projet Angular suit une structure conventionnelle qui ressemble à ceci :

```sh
SaeFront/
│
├── src/
│ ├── app/
│ │ ├── components/ # Composants de l'application
│ │ ├── services/ # Services pour la logique métier
│ │ ├── models/ # Modèles de données
│ │ ├── app-routing.module.ts # Configuration des routes
│ │ ├── app.module.ts # Configuration du module principal
│ │
│ ├── assets/ # Fichiers statiques (images, styles, etc.)
│
├── angular.json # Configuration globale du projet
├── package.json # Liste des dépendances et scripts
├── README.md # Ce fichier
```

## Génération de code

Angular CLI facilite la génération de composants, services et d'autres artefacts. Voici comment vous pouvez générer ces éléments :

- Générer un composant :

  ```bash
  ng generate component nom-du-composant
  ```

- Générer un service :

  ```bash
  ng generate service nom-du-service
  ```

## Compilation du projet

Pour construire le projet pour la production, exécutez la commande suivante :

```bash
ng build
```

Les artefacts de construction seront stockés dans le répertoire `server/dist/`.

### Serveur de production

Nous avons ajouté un server pour la production, pour le lancer, vous devez vous rendre dans le dossier server.

```bash
cd server
```

Puis vous installerez les dépendances

```bash
npm install
```

Puis demmarez le server

```bash
npm start
```

## Tests unitaires

Pour exécuter les tests unitaires, utilisez la commande suivante :

```bash
ng test
```

Cela exécutera les tests unitaires à l'aide de Karma.

## Tests end-to-end

Pour exécuter des tests end-to-end, utilisez la commande suivante :

```bash
ng e2e
```

Vous devrez d'abord ajouter un package qui implémente des capacités de test end-to-end.

## Besoin d'aide supplémentaire

Si vous avez besoin d'aide supplémentaire sur l'utilisation de la CLI Angular, vous pouvez exécuter la commande suivante :

```bash
ng help
```

Vous pouvez également consulter la [page Angular CLI Overview and Command Reference](https://angular.io/cli) pour plus d'informations.
