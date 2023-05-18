const mostrarMenu = () => {
    return new Promise(( resolve, reject ) => {
        console.clear();
        console.log( '=================================='.green );
        console.log( '  SELECCIONE UNA OPCION DEL MENU  '.cyan )
        console.log( '==================================\n'.green );
        console.log( `${ '1.'.green } Crear Tarea` );
        console.log( `${ '2.'.green } Listar Tareas` );
        console.log( `${ '3.'.green } Listar Tareas Completadas` );
        console.log( `${ '4.'.green } Listar Tareas Pendientes` );
        console.log( `${ '5.'.green } Completar Tarea(s)` );
        console.log( `${ '6.'.green } Borrar Tarea` );
        console.log( `${ '0.'.green } Salir\n` );
    
        // TODO: para escribir datos por consola
        const entradaDatosPorConsola = require( 'readline' ).createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        entradaDatosPorConsola.question( 'Seleccione una opcion: ', ( opcionSeleccioanda ) => {
            //console.log({ opcionSeleccioanda });
            entradaDatosPorConsola.close();

            // TODO: esto retornamos al main
            resolve( opcionSeleccioanda );
        });
    });
}

const pausarMenu = () => {
    return new Promise(( resolve, reject ) => {
        const entradaDatosPorConsola = require( 'readline' ).createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        entradaDatosPorConsola.question( `\nPresione ${ 'ENTER'.green } Para Continuar\n`, ( opcionSeleccioanda ) => {
            entradaDatosPorConsola.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausarMenu
}