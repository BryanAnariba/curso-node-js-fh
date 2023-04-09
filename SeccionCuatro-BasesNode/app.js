const { argv } = require("./config/yargs");
const { generarTablaMultiplicacion } = require("./utils/multiplicar");


console.clear();

/* SIN YARGS 
    // TODO: node app --numero=12, process.argv obtenemos el --numero=12
    const [ , , numeroParaMultiplicar = 'numero=1' ] = process.argv;
    console.log( process.argv ); 
    console.log({ numeroParaMultiplicar })

    const numeroAMultiplicar = numeroParaMultiplicar.split( "=" ).pop();
    console.log({ numeroAMultiplicar })
*/

// CON YARGS
// console.log({ processArgv: process.argv, argv: argv });
generarTablaMultiplicacion( argv.b, argv.l, argv.h )
.then((success) => {
    console.log( success );
})
.catch((error) => {
    console.log( error );
});

/*
    node app --help
    node app --base=10
    node app --base=11 --listar

    Script Final a Ejecutar
    node app --base=? --hasta=? --listar
    node app --base=5 --hasta=20 --listar
*/