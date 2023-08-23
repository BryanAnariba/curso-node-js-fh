const fs = require('node:fs/promises');

// Lectura de ficheros asyncrono
console.log('Leyendo Primer archivo');

fs.readFile( './archivo.txt', 'utf-8')
.then(data => console.log('Contenido Uno: ' + data));

console.log('Haciendo Cosas mientras lee el archivo');
console.log('Leyendo Segundo archivo');

fs.readFile( './archivo2.txt', 'utf-8')
.then(data => console.log('Contenido Dos: ' + data));