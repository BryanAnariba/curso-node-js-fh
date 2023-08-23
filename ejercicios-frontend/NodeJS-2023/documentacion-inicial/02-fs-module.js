const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
    `Es un archivo: ${ stats.isFile() } - Es Directorio: ${ stats.isDirectory() } - Es Simbolo: ${ stats.isSymbolicLink() } - Tamanio bytes: ${ stats.size }`
);

// Lectura de ficheros asyncrono
console.log('Leyendo Primer archivo');
fs.readFile( './archivo.txt', 'utf-8', ( err, data ) => {
    console.log('Contenido Uno: ' + data);
});

console.log('Haciendo Cosas mientras lee el archivo');
console.log('Leyendo Segundo archivo');

fs.readFile( './archivo2.txt', 'utf-8', ( err, data2 ) => {
    console.log('Contenido Dos: ' + data2);
});