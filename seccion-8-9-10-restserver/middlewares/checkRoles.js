const { handleHttpError } = require('../utils/handleHttp');
const { request, response } = require("express");

isAdminRole = ( req = request, res = response, next ) => {
    if ( !req.userData ) {
        return handleHttpError( res, 500, 'HTTP_ACCESS_ERROR', 'You need a token for this action' );
    }
    if ( req.userData.userRole !== 'ADMIN' ) {
        return handleHttpError( res, 401, 'HTTP_ACCESS_ERROR', 'You do not have permisions for this action' );
    }
    next();
}

isInRole = ( ...roles ) => {
    return ( req = request, res = response, next ) => {
        //console.log(roles);
        if ( !req.userData ) {
            return handleHttpError( res, 500, 'HTTP_ACCESS_ERROR', 'You need a token for this action' );
        } 
        if ( !roles.includes( req.userData.userRole ) ) {
            return handleHttpError( res, 401, 'HTTP_ACCESS_ERROR', `You do not have permisions for this action, roles permited: ${ roles }` );
        }
        next();
    }
}

module.exports = {
    isAdminRole,
    isInRole
}