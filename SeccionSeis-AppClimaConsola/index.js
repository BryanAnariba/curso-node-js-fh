import { inquirerMenu, inquirerPausaMenu } from "./utils/inquirerMenu.js";

const main = async () => {

    let opcionSeleccionada = 0;
    do {
        opcionSeleccionada = await inquirerMenu();
        console.log({ opcionSeleccionada });

        ( opcionSeleccionada !== 0 ) && await inquirerPausaMenu();
    } while ( opcionSeleccionada != 0 );

}

main();