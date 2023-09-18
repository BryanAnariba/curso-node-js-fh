import 'dotenv/config';
import { Server } from './presentation/Server';
import { AppRoutes } from './presentation/routes';

(() => {
  main();
})()


async function main () {
  try {
    // TODO: await a la base de datos 2:34
    
    // TODO: inicio del servidor
    new Server({ port: process.env.PORT, routes: AppRoutes.routes }).start();
  } catch ( error ) {
    throw new Error( `${ ( error instanceof Error ) ? error.message : error }` )
  }
}
