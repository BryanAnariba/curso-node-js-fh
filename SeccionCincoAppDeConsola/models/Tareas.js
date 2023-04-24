import { Tarea } from "./Tarea.js";

class Tareas {

    _listadoTareas = {};
    /*
        ESQUELETO DEL OBJETO PARECIDO A MONGO
        { 
            '12345678901': { id: 1, desc: 'Hola', completadoEn: null }, 
            '12345678902': { id: 2, desc: 'Hola Dos', completadoEn: null }
        }
        12345678901 y 12345678902 son los uuid
    */

    constructor () {
        this._listadoTareas = {};
    }

    agregarATareas( desc = '' ) {
        const tarea = new Tarea( desc );
        this._listadoTareas[ tarea.id ] = tarea;
    }

    // TODO: transformando objeto en arreglo
    get tareasComoColeccion () {
        const listado =[];
        Object.keys( this._listadoTareas ).forEach(( id ) => {
            //console.log({id})
            const tarea = this._listadoTareas[id];
            listado.push( tarea );
        })
        return listado;
    }

    cargarColeccionTareasAObjeto ( tareas = [] ) {
        tareas.forEach(tarea => {
            this._listadoTareas[ tarea.id ] = tarea;
        });
    }

    estilizadoDeTarea () {
        // 1. Recolectar las piedras del infinito :: Completada | Pendiente
        this.tareasComoColeccion.forEach((tarea, index) => {
            console.log( `${ `${ index + 1 }.`.green } ${ tarea.desc } :: ${ ( tarea.completadoEn !== null ) ? tarea.completadoEn.green : 'Pendiente'.red }` );
        });
    }

    listarTareasPoC ( isCompletadas = true ) {
        let tareasCompletadas = [];
        if ( isCompletadas ) {
            tareasCompletadas = this.tareasComoColeccion.filter( tarea => tarea.completadoEn != null );
            tareasCompletadas.forEach((tarea, index) => {
                console.log( `${ `${ index + 1 }.`.green } ${ tarea.desc } :: ${ tarea.completadoEn.green }` );
            });
        } else {
            tareasCompletadas = this.tareasComoColeccion.filter( tarea => tarea.completadoEn === null );
            tareasCompletadas.forEach((tarea, index) => {
                console.log( `${ `${ index + 1 }.`.green } ${ tarea.desc } :: ${ 'Pendiente'.red }` );
            });
        }
    }

    borrarTarea( id = '' ) {
        if ( this._listadoTareas[id] ) {
            delete this._listadoTareas[id];
        }
    }
}

export { 
    Tareas,
}