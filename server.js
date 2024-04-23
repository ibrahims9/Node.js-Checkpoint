const http = require('http');
const { type } = require('os');
const server = http.createServer((req , res) => {

    res.writeHead(200,{'content-Type':'text/html'});
    res.end('<h1> Hello Node !!!</h1>\n');
});


server.listen(3000,()=>{
    console.log('Server en ecout sur le port 3000...');
});


const fs = require ('fs');
fs.writeFile('Welcom.txt', 'Hello Node', (err) => {
    if(err)
        console.log('err');
    else{
        console.log('Le fichier "welcome.txt" a été créé avec succès !');
    }
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if(err){
        console.log('ereur');
    }else{
        console.log('Contenu de welcome.txt :', data)};
});


