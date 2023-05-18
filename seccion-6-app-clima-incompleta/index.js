import { Busqueda } from "./models/Busqueda.js";
import { inquirerMenu, inquirerPausaMenu, leerInput } from "./utils/inquirerMenu.js";

const main = async () => {

    let nuevaBusqueda = new Busqueda();
    let opcionSeleccionada = 0;

    do {

        opcionSeleccionada = await inquirerMenu();
        
        switch ( opcionSeleccionada ) {
            case opcionSeleccionada = 1:
                const lugarABuscar = await leerInput( 'Ciudad: ' );
                //console.log( { lugarABuscar } );
                const data = await nuevaBusqueda.lugaresSimilares( lugarABuscar );
                console.log( data );
                console.log( '\nInformacion de la Ciudad.\n'.green );
                console.log( 'Ciudad: '.white );
                console.log( 'Lat: '.white );
                console.log( 'Long: '.white );
                console.log( 'Temperatura: '.white );
                console.log( 'Minima: '.white );
                console.log( 'Maxima: '.white );

            break;
            case opcionSeleccionada = 2:
                console.log({ historialLugares: nuevaBusqueda.historial });
            break;
            case opcionSeleccionada = 0:
            break;
        }
        
        ( opcionSeleccionada !== 0 ) && await inquirerPausaMenu();

    } while ( opcionSeleccionada !== 0 );

}

main();