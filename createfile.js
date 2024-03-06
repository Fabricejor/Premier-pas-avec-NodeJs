var fs = require('fs');

// wrtieFile seulement creer un fichier si il  néxiste pas si le fichier existe il sera toujours ecraser par le fichier du meme nom
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
      console.error('Erreur lors de la création du fichier :', err);
      return;
    }
    console.log('Le fichier welcome.txt a été créé avec succès !');
  });