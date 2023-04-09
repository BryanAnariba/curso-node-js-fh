import 'colors';
import { inquirerMenu, inquirerPausaMenu } from './utils/inquirerMenu.js';
import { Tarea } from './models/Tarea.js';
import { Tareas } from './models/Tareas.js';


const main = async () => {
    let opcionSeleccioanda = '';
    console.clear();
    do {
        
        opcionSeleccioanda = await inquirerMenu();
        //console.log({ opcionSeleccioanda });

        const tarea = new Tarea( 'Primer Tarea de Prueba' );
        console.log({ tarea });

        const tareas = new Tareas();
        tareas._listadoTareas[ tarea.id ] = tarea;
        console.log({ tareas });
        
        if ( opcionSeleccioanda !== '0' ) await inquirerPausaMenu();
        console.clear();
        
    } while ( opcionSeleccioanda !== '0' );
}

main();