const os = require('node:os');

console.log('Informacion del sistema operativo');
console.log('Nombre SO: ', os.platform());
console.log('Version SO: ', os.release());
console.log('Arquitectura SO: ', os.arch);
console.log('CPUS: ', os.cpus());
console.log('RAM (MBS): ', (os.freemem()/1024/1024));
console.log('RAM TOTAL (MBS): ', (os.totalmem()/1024/1024));
console.log('IP: ', (os.networkInterfaces()));

