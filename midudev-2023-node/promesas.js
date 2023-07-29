const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8')
.then(text => console.log(text));

console.log('CODIGO BLOQUEADO ESTE ES EL PROBLEMA DE LA SINCRONIA EN JS POR ESO LA ASYNCRONIA');
console.log('Leyendo el primer archivo');

fs.readFile('./archivo1.txt', 'utf-8')
.then(text => console.log(text));