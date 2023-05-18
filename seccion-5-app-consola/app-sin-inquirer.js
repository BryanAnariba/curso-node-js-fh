require( 'colors' );
const { mostrarMenu, pausarMenu } = require('./utils/mensajes');

const main = async () => {
    let opcionSeleccioanda = '';

    do {
        opcionSeleccioanda = await mostrarMenu();
        
        console.log({ opcionSeleccioanda });

        if ( opcionSeleccioanda !== '0' ) await pausarMenu();
    } while ( opcionSeleccioanda !== '0' );
}

main();