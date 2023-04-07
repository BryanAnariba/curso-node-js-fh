const empleados = [
    {
        uid: 1,
        nombre: 'Bryan'
    },
    {
        uid: 2,
        nombre: 'Ariel'
    },
    {
        uid: 3,
        nombre: 'Erick'
    }
];

const salarios = [
    {
        uid: 1,
        salario: 1500
    },
    {
        uid: 2,
        salario: 500
    }
];

const getEmpleado = ( uid, callback ) => {
    let empleado = empleados.find( e => e.uid === uid );
    if ( empleado ) {
        callback( null, empleado ); // OJO PARA QUE SE EJECUTE EL CONSOLE.LOG CON EM EMPLEADO DEBO LLAMAR AL CALLBACK DESDE AQUI
    } else {
        callback( `Empleado con uid: ${ uid } no existe`, null ); // OJO PARA QUE SE EJECUTE EL CONSOLE.LOG CON EM EMPLEADO DEBO LLAMAR AL CALLBACK DESDE AQUI
    }
}

const getSalario = ( uid, callback ) => {
    let salarioEmpleado = salarios.find( s => s.uid === uid );
    if ( salarioEmpleado ) {
        callback( null, salarioEmpleado );
    } else {
        callback( `El empleado: ${ uid } no cuenta con salario de momento`, null );
    }
}

getEmpleado( 3, ( err, empleado ) => {
    if ( err ) {
        console.log( 'ERROR AL ENCONTRAR UN EMPLEADO!' );
        return console.log( err );
    }
    
    // CALLBACK HELL AQUI, SI EL EMPLEADO EXISTE POSIBLEMENTE TENGA SALARIO ES CASI QUE SI
    getSalario( empleado.uid, ( err, salarioDeEmpleado ) => {
        if ( err ) {
            console.log( 'ERROR AL ENCONTRAR EL SALARIO DE UN EMPLEADO' );
            return console.log( err );
        }  
        console.log( `Datos del empleado \nNombre: ${ empleado.nombre } Apellido: ${ empleado.apellido } Salario: ${ salarioDeEmpleado.salario } ` )
    });
});

