const argv = require( 'yargs' )
.option('b', {
    alias: 'base', // NOMBRE b o base
    type: 'number', // TIPO DATO
    demandOption: true, // OBLIGATORIO
    describe: 'Este es el numero por el cual se genera la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra dicha tabla generada en caso de escribir el comando'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 12,
    describe: 'Esto indica hasta donde quiere que se genere la tabla de multiplicar'
})
.check( ( argv, options ) => {
    if ( isNaN( argv.b ) ) {
        throw new Error( 'LA BASE DEBE DE SER DE TIPO NUMERICO' ); 
    }
    return true;
})
.argv;

module.exports = {
    argv
}