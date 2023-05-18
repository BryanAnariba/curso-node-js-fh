const { readdirSync } = require( 'fs' );
const { Router } = require( 'express' );

const PATH_ROUTES = `${ __dirname }`;
const router = Router();
console.clear();

const cleanName = ( routeFileName = '' ) => {
    return routeFileName.split( '.' ).shift(); // users.js => [ 'users', 'js' ] => shift => users, pop => js
}

readdirSync( PATH_ROUTES ).filter(( routeFileName ) => {
    const routeWithOutExt = cleanName( routeFileName );
    if ( routeWithOutExt.trim().toLowerCase() !== 'index' ) {
        console.log({ routeLoaded: routeWithOutExt });
        router.use( `/${ routeWithOutExt }`, require( `./${ routeWithOutExt }.js` ) );
    }
});

module.exports = router;