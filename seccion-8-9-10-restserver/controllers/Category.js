const { request, response } = require("express");

const {
    findCategoryByName, 
    createNewCategory, 
    getTotalCategories, 
    findCategories, 
    findCategoryById, 
    updateCategory, 
    deleteCategory 
} = require("../services/categories.service");

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

const getItems = async ( req = request, res = response ) => {
    try {
        const { skip, limit } = req.query;
        const [ totalCategories, categories ] = await Promise.all(
            [
                getTotalCategories(),
                findCategories( skip, limit )
            ]
        );

        statusCode = 200;
        return res.status( statusCode ).json({ statusCode: statusCode, data: { totalCategories: totalCategories, categories: categories }});
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpError( res, statusCode, 'HTTP_GET_CATEGORIES_ERROR', error.message );
    }
}

const getItem = async ( req = request, res = response ) => {
    try {
        const { categoryId } = req.params;
        const dataBaseResponse = await findCategoryById( categoryId );
        statusCode = 200;
        return res.status(statusCode).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpError( res, statusCode, 'HTTP_GET_CATEGORIES_ERROR', error.message );
    }
}

const updateItem = async ( req = request, res = response ) => {
    try {
        const { categoryId } = req.params;
        const { name } = req.body;
        const dataBaseResponse = await updateCategory( categoryId, name );
        statusCode = 200;
        return res.status(statusCode).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpError( res, statusCode, 'HTTP_UPDATE_CATEGORY_ERROR', error.message );
    }
}

const deleteItem = async ( req = request, res = response ) => {
    const { categoryId } = req.params;
    try {
        const dataBaseResponse = await deleteCategory( categoryId );
        statusCode = 200;
        return res.status( statusCode ).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpError( res, statusCode, 'HTTP_DELETE_CATEGORY_ERROR', error.message );
    }
}

module.exports = {
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem,
}