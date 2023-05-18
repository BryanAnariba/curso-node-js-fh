import axios from  'axios';
import { endPoints } from '../config/endPoints.js';

class Busqueda {
    historial = [ 'Tegucigalpa', 'Madrid', 'San Jose' ];

    constructor () {
        // TODO: leer base de datos si existe, en este caso para este ejercicio sera un json
    }

    async lugaresSimilares ( lugar = '' ) {
        try {
            // TODO: peticion HTTP
            const response = await axios.get( `${ endPoints.test }` );

            // TODO: retornar los lugares similares a lo que se almacena en la variable lugar, similar a un Like '%????%'---> @6AppClimaConsola
            // PROBLEMON: A ESTAS COSAS LES GUSTA PEDIR LAS TARJETAS SEA DEBITO O CREDITO, DE MOMENTO SOLO VERE LA SECCION DE LA APP DE CLIMA POR QUE NO DESEO PONER LA TARJETA EN MAPBOX
            return response.data;
        } catch ( error ) {
            return [];
        }

    }
}

export {
    Busqueda
}