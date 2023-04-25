import 'colors';
import { confirmar, inquirerMenu, inquirerPausaMenu, leerInput, listadoTareasABorrar, seleccionarYCompletar } from './utils/inquirerMenu.js';
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

    //@Unah
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
            case '3':
                tareas.listarTareasPoC( true );
            break;
            case '4':
                tareas.listarTareasPoC( false );
            break;
            case '5':
                const idTareasParaCompletar = await seleccionarYCompletar( tareas.tareasComoColeccion );
                //console.log({idTareasParaCompletar});
                tareas.cambiaEstadoTareas( idTareasParaCompletar );
            break;
            case '6':
                const id = await listadoTareasABorrar( tareas.tareasComoColeccion );
                if ( id !== '0' ) {
                    const ok = await confirmar('Esta Seguro de Eliminar este Registro');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                    }
                }
            break;
        }
        
        guardar( tareas.tareasComoColeccion );
        if ( opcionSeleccioanda !== '0' ) await inquirerPausaMenu();
        console.clear();
    } while ( opcionSeleccioanda !== '0' );
}

main();