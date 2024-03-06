//! On doit executer dabors createfile.js pour que ce script s'execute sans soucis
var fs = require('fs');

// read fonction pour lire ( 1er arg => nom du fichier existant ,2e arg => pour les accents )
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier :', err);
      return;
    }
    console.log('Contenu du fichier welcome.txt :', data);
  });