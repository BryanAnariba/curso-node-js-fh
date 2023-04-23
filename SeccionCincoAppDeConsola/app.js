import 'colors';
import { inquirerMenu, inquirerPausaMenu, leerInput } from './utils/inquirerMenu.js';
import { Tareas } from './models/Tareas.js';
import { guardar, obtenerRegistros } from './utils/guardar.js';


const main = async () => {
    let opcionSeleccioanda = '';

    const tareas = new Tareas();
    const tareasRegistradasEnDB = obtenerRegistros();

    if ( tareasRegistradasEnDB ) {
        // ESTABLECER TAREAS
        tareas.cargarColeccionTareasAObjeto( tareasRegistradasEnDB );
    }
    //await inquirerPausaMenu();
    console.clear();
    do {    
        opcionSeleccioanda = await inquirerMenu();
        //console.log({ opcionSeleccioanda });

        switch ( opcionSeleccioanda ) {
            case '1':
                const desc = await leerInput( 'Descripcion: ' );
                //console.log({ desc });
                tareas.agregarATareas( desc );
            break;
            case '2':
                tareas.estilizadoDeTarea();
            break;
        }
        
        guardar( tareas.tareasComoColeccion );
        if ( opcionSeleccioanda !== '0' ) await inquirerPausaMenu();
        console.clear();
    } while ( opcionSeleccioanda !== '0' );
}

main();