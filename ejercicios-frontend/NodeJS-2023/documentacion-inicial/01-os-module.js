const os = require('node:os');

console.clear()
console.log('=====> Informacion del sistema operativo <=====');
console.log('Nombre SO: ' + os.platform());
console.log('Version SO: ' + os.release);
console.log('Arquitectura SO: ' + os.arch());
console.log('Informacion  de CPUs SO: ');
os.cpus().forEach(
    cpu => console.log(cpu)
);
console.log('Memoria Libre: ' + os.freemem() / 1024 / 1024 );
console.log('Memoria Total: ' + os.totalmem() / 1024 / 1024 );
console.log('Tiempo de la computadora encendida: ' + os.uptime / 60 / 60);
