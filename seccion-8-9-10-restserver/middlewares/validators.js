const { request, response } = require("express");
const { validationResult } = require("express-validator");
const { handleHttpError } = require("../utils/handleHttp");

const validator = ( req = request, res = response, next ) => {
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        statusCode = 400
        return handleHttpError( res, statusCode, 'HTTP_VALIDATOR_ERROR', errors );
    }
    next();
}

module.exports = {
    validator,
}