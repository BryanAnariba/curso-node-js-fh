const { readdirSync  } = require( 'fs' );
const { Router } = require( 'express' );
const PATH_ROUTES = `${ __dirname }`;

const router = Router();

console.clear();

const nameWithOutExt = ( fileName ) => {
    // TODO: auth.js => [ 'auth', 'js' ] => shift = auth, pop = js
    return fileName.split( '.' ).shift();
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const cleanName = nameWithOutExt( fileName );
    if ( cleanName !== 'index' ) {
        console.log({ routeLoaded: cleanName });
        router.use( `/api/${ cleanName }`, require( `./${ cleanName }.js` ) );
    }
});

module.exports = router;