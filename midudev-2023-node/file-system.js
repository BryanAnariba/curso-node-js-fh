const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)
console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
});

console.log('CODIGO BLOQUEADO ESTE ES EL PROBLEMA DE LA SINCRONIA EN JS POR ESO LA ASYNCRONIA');
console.log('Leyendo el primer archivo')

fs.readFile('./archivo1.txt', 'utf-8', (err, text2) => {
    console.log(text2);
});