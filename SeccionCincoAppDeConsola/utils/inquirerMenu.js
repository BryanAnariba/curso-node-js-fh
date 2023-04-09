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

export {
    inquirerMenu,
    inquirerPausaMenu
}
