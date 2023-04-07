let nombre = 'Wolverine';

console.log({ nombre });

if ( true ) {
    let nombre = 'Magneto';
    console.log({ ambitoScopeNombre: nombre });
}

console.log({ nombre });