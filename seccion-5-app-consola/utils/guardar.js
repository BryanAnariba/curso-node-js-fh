import fs from 'fs';
const archivo = './db/db.json';

const guardar = ( registro ) => {
    fs.writeFileSync( archivo, JSON.stringify( registro ) );
}

const obtenerRegistros = () => {
    // SI NO EXISTE EL ARCHIVO
    if ( !fs.existsSync( archivo ) ) {
        return null;
    }

    const res = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( res );
    //console.log( data )
    return data;
}

export {
    guardar,
    obtenerRegistros,
}