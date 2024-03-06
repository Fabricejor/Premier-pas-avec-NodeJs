const fs = require('fs');
const generator = require('generate-password');//module pour générer des mot de pass unique

// Fonction pour générer un mot de passe unique 
function generateUniquePassword() {
    let password = generator.generate({
        length: 10,
        numbers: true,
        symbols: true
    });

    // Vérifier si le mot de passe généré existe déjà dans le fichier password.log
    let existingPasswords = [];//tableau vide
    try {
        existingPasswords = fs.readFileSync('password.log', 'utf8').split('\n');// le tableau vide qui recoit les inputs du fichier log
    } catch (error) {
        console.log("le fichier n'existe pas" + error);
    }

    if (existingPasswords.includes(password)) {
        // Si le mot de passe existe déjà, générer un nouveau mot de passe unique
        return generateUniquePassword();//on rapelle la fonction par le bais de recursivité
    } else {
        // Si le mot de passe n'existe pas encore dans le log, l'ajouter au fichier password.log avec saut a la ligne
        fs.appendFileSync('password.log', password + '\n'); 
        return password;
    }
}

// Générer un mot de passe unique et l'afficher
const newPassword = generateUniquePassword();
console.log('Nouveau mot de passe généré :', newPassword);
