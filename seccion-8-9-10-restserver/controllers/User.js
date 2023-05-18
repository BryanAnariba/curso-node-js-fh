const { request, response } = require("express");
const { handleHttpError } = require("../utils/handleHttp");
const { createUser } = require("../services/users.service");

const findItems = async ( req = request, res = response ) => {
    try {
        const { skip = 0, limit = 10 } = req.query;
        return res.status( 200 ).json({ statusCode: 200, data: {  message: '@Get-Users Works', limit: limit, skip: skip }});
    } catch ( error ) {
        return handleHttpError( res, 500, 'HTTP_FIND_ITEM', error.message );
    }
}

const findItem = async ( req = request, res = response ) => {
    try {
        const { userId} = req.params;
        return res.status( 200 ).json({ statusCode: 200, data: `@Get-User Works -> ${ userId }` });
    } catch ( error ) {
        return handleHttpError( res, 500, 'HTTP_FIND_ITEMS', error.message );
    }
}

const createItem = async ( req = request, res = response ) => { 
    try {
        const { userName, userEmail, userPassword, userRole } = req.body;
        const dataBaseResponse = await createUser({ userName, userEmail, userPassword, userRole });
        return res.status( 201 ).json({ statusCode: 201, data: dataBaseResponse });
    } catch ( error ) {
        return handleHttpError( res, 500, 'HTTP_CREATE_ITEM', error.message );
    }
}

const updateItem = async ( req = request, res = response ) => { 
    try {
        const { userId} = req.params;
        return res.status( 200 ).json({ statusCode: 200, data: `@Put-Users Works -> ${ userId }`});
    } catch ( error ) {
        return handleHttpError( res, 500, 'HTTP_UPDATE_ITEM', error.message );
    }
}

const deleteItem = async ( req = request, res = response ) => { 
    try {
        const { userId} = req.params;
        return res.status( 200 ).json({ statusCode: 200, data: `@Delete-Users Works -> ${ userId }` });
    } catch ( error ) {
        return handleHttpError( res, 500, 'HTTP_DELETE_ITEM', error.message );
    }
}

module.exports = {
    findItems,
    findItem,
    createItem,
    updateItem,
    deleteItem,
}