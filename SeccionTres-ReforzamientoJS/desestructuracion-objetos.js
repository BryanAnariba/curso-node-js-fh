const personaje = {
    nombre: 'Wade',
    apellido: 'Wison',
    poder: 'Regeneracion',
    getData: function() {
        return `Nombre Personaje: ${ nombre } ${ apellido }, Poder ${ poder }`
    }
}
const { nombre, apellido, poder, getData } = personaje;
console.log( getData() );

function onViewHeroe ({ nombre, apellido, poder }) {
    return `Hero Name: ${ nombre } ${ apellido }, Power ${ poder }`
}
console.log( onViewHeroe( personaje ) );

const heroes = [ 'Batman', 'Iron Man', 'Saitama' ];
const [ h1, h2, h3 ] = heroes;
console.log( { h3 } );

