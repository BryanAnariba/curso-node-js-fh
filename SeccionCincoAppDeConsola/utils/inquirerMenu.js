import inquirer from 'inquirer';

const preguntasDelMenu = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que Desea Hacer?',
        choices: [
            { value: '1', name: `${ '1.'.green } Crear Tarea` },
            { value: '2', name: `${ '2.'.green } Listar Tareas` },
            { value: '3', name: `${ '3.'.green } Listar Tareas Completadas` },
            { value: '4', name: `${ '4.'.green } Listar Tareas Pendientes` },
            { value: '5', name: `${ '5.'.green } Completar Tarea(s)` },
            { value: '6', name: `${ '6.'.green } Borrar Tarea` },
            { value: '0', name: `${ '0.'.green } Salir` }
        ]
    }
]

const inquirerMenu = async () => {
    console.log( '=================================='.green );
    console.log( '  SELECCIONE UNA OPCION DEL MENU  '.cyan )
    console.log( '==================================\n'.green );

    const { opcion } = await inquirer.prompt( preguntasDelMenu );
    return opcion;

}

const inquirerPausaMenu = async () => {
    console.log('\n');
    await inquirer.prompt([{ type: 'input', name: 'opcion', message: `Presione ${ 'ENTER'.green } Para Continuar` }]);
}

const leerInput = async ( mensaje ) => {
    const { desc } = await inquirer.prompt([
        {
            type: 'input',
            name: 'desc',
            message: `${ mensaje }`,
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'La descripcion de la tarea es obligatoria'
                }
                return true;
            }
        }
    ]);
    return desc;
}

const listadoTareasABorrar = async ( tareas = [] ) => {
    const choices = tareas.map((tarea, index) => {
        return {
            value: tarea.id,
            name: `${ `${ index + 1 }.`.green } ${ tarea.desc }`
        }
    });
    choices.unshift({ value: '0', name: '0.'.green + ' Cancelar' })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices
        }
    ]
    const { id } = await inquirer.prompt( preguntas );
    return id;
}

const confirmar = async ( message = '' ) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message: message,
        }
    ] 
    const { ok } = await inquirer.prompt( pregunta );
    return ok;
}

export {
    inquirerMenu,
    inquirerPausaMenu,
    leerInput,
    listadoTareasABorrar,
    confirmar,
}
