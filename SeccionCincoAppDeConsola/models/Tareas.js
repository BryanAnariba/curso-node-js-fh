class Tareas {

    _listadoTareas = {};
    /*
        ESQUELETO DEL OBJETO PARECIDO A MONGO
        { 
            '12345678901': { id: 1, desc: 'Hola', completadoEn: null }, 
            '12345678902': { id: 2, desc: 'Hola Dos', completadoEn: null }
        }
        12345678901 y 12345678902 son los uuid
    */

    constructor () {
        this._listadoTareas = {};
    }

}

export { 
    Tareas,
}