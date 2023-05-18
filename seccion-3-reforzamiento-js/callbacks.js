// setTimeout(
//     function () {
//         console.log( 'Hola Mundo en dos segundos, la funcion o callback se ejecutara despues de los 2s' )
//     },
//     2000
// );

const getUsuarioById = ( uid, callback ) => {
    const usuario = {
        uid: uid,
        nombre: 'Bryan Ariel',
        apellido: 'Sanchez Anariba'
    }

    setTimeout( () => {
        callback( usuario );
    }, 1500 );
}

getUsuarioById( 817, ( usuario ) => {
    console.log( usuario );
});
