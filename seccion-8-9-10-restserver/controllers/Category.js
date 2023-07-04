const { request, response } = require("express");

const { findCategoryByName, createNewCategory } = require("../services/categories.service");

const { handleHttpError } = require( '../utils/handleHttp' );

let statusCode = 0;

const createItem = async ( req = request, res = response ) => {
    try {
        const name = req.body.name.toUpperCase();
        const existsCategory = await findCategoryByName( name );
        if ( existsCategory ) {
            statusCode = 400;
            throw new Error( `The category ${ existsCategory.name } already exists.` );
        }
        const categoryData = {
            name: name,
            user: req.userData._id
        }
        statusCode = 201;
        const dataBaseResponse = await createNewCategory( categoryData );
        return res.status( statusCode ).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpError( res, statusCode, 'HTTP_CREATE_CATEGORY_ERROR', error.message );
    }
}

module.exports = {
    createItem
}