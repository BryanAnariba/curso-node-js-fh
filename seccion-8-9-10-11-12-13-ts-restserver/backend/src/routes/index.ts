import { readdirSync } from 'node:fs';
import { Router } from "express";

const indexRoutes: string = `${ __dirname }`;
const router: Router = Router();

const getRouteName = ( fileName: string ): string => {
    return `${ fileName.split('.').shift() }`;
}

console.clear();

readdirSync( indexRoutes ).filter( fileName => {
    const routeName: string = getRouteName( fileName );
    if ( routeName !== 'index' ) {
        console.log({ routeName });
        import( `./${ routeName }.ts` )
        .then(
            module => {
                router.use( `/${ routeName }`, module.router );
            }
        );
    }
});

export default router;

