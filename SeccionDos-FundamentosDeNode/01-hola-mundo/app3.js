console.clear();
console.log(  `CREO QUE ESTO ES EL HOISTING PRIMERO LEE EL CODIGO Y CREA EN MEMORIA TODO A UTILIZAR POR ESO EJECUTA LOS CONSOLE PRIMERO` )
console.log( 'Inicio' ); // 1

setTimeout( () => {
    console.log( `Primer timeout` ); // 5
}, 3000 );

setTimeout( () => {
    console.log( `Segundo timeout` ); // 3
}, 0 );

setTimeout( () => {
    console.log( `Tercer timeout` ); // 4
}, 0 );


console.log( 'Fin' ); // 2