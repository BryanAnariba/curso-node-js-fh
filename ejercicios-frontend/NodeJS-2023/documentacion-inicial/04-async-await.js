const fs = require('node:fs/promises');

// Lectura de ficheros asyncrono 1:09:15
console.log('Leyendo Primer archivo');

(async function() {
    const data = await fs.readFile( './archivo.txt', 'utf-8');
    console.log(data);
})();

console.log('Haciendo Cosas mientras lee el archivo');
console.log('Leyendo Segundo archivo');

(async function() {
    const data2 = await fs.readFile( './archivo2.txt', 'utf-8');
    console.log(data2);
})();