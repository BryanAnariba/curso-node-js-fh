console.clear();
const saludar = ( nombreUsuario ) => {
    return `Bienvenid@: ${ nombreUsuario.trim().toUpperCase() }`;
}

console.log( saludar( 'Ariel Anariba' ) );