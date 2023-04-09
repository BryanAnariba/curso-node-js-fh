require( 'colors' );
const fs = require( 'fs' );

let salidaDatos = '';
let salidaDatosATxt = '';
const generarTablaMultiplicacion = async ( numero, listar = false, hasta = 12 ) => {
    try {
        console.log(`===== TABLA DEL ${ numero } =====`.cyan);
        for ( let i = 1; i <= hasta; i++ ) {
            if (salidaDatos.trim() === '') {
                salidaDatos += ''
                salidaDatosATxt += ''
            } else {
                salidaDatos += '\n';
                salidaDatosATxt += '\n'
            }
            salidaDatos += `${ numero } ${ 'X' } ${ i } = ${ numero * i }`.yellow;
            salidaDatosATxt += `${ numero } ${ 'X' } ${ i } = ${ numero * i }`;
        }
        fs.writeFileSync( `tabla-multiplicar-${ numero }.txt`, salidaDatosATxt );
        if ( listar ) {
            return salidaDatos;
        } else {
            return `TABLA DEL ${ numero } CREADA EXITOSAMENTE`.cyan;
        }
        
    } catch ( err ) {
        throw new Error( err );
    }
}



module.exports = {
    generarTablaMultiplicacion
}