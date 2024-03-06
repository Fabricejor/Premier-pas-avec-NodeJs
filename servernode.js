var http = require('http');

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})//definit l'entete de la reponse si la reponse est 200 ( la requete a reussis)
    res.end('<h1>Hello Node!!!!</h1>\n'); //definis la reponse au client
});

server.listen(3000, () => { // on demande au serveur d'ecouter sur le port 3000
    console.log('Le serveur écoute sur le port 3000...');
  });