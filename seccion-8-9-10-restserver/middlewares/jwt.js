const { response, request } = require('express');
const jwt = require( 'jsonwebtoken' );

const { UserModel } = require('../models/index');
const { handleHttpError } = require('../utils/handleHttp');
const { findUserById } = require('../services/users.service');

const verifyAuthenticationAccess = async ( req = request, res = response, next ) => {
    const token = req.header('x-access-token'); // Bearer tokenasdasdasdsad => tokenasdasdasdsad

    if ( !token ) {
        return handleHttpError( res, 401, 'HTTP_ACCESS_ERROR', 'Token not provided' );
    }
    
    try {
        const { uid } = jwt.verify( token.split( ' ' ).pop(), process.env.SECRET_KEY );
        // Lo almacenamos en la request para poder hacer peticiones
        const usuario = await UserModel.findOne({ _id: uid });

        if ( !usuario ) {
            return handleHttpError( res, 401, 'HTTP_ACCESS_ERROR', 'User does not exists' );
        }

        if ( !usuario.userStatus ) {
            return handleHttpError( res, 401, 'HTTP_ACCESS_ERROR', 'Invalid token - inactive user' );
        }
        
        req.userData = usuario;
        next();
    } catch ( error ) {
        return handleHttpError( res, 401, 'HTTP_ACCESS_ERROR', error );
    }
    
}

module.exports = {
    verifyAuthenticationAccess
}