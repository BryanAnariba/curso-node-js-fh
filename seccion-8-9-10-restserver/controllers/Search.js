const { request, response } = require("express");
const { Types } = require("mongoose");

const { handleHttpError } = require("../utils/handleHttp");

const { findUserById, findUserByNameOrEmail } = require("../services/users.service");
const { findProductById, findProductsByName } = require("../services/products.service");
const { findCategoryById, findCategoriesByName } = require("../services/categories.service");

const entities = [
    'user',
    'product',
    'category',
    'role'
];

const searchUser = async ( term = '', res = response ) => {
    const isMongoId = Types.ObjectId.isValid(term);
    if (isMongoId) {
        const dataBaseResponse = await findUserById(term);
        return res.status(200).json({ statusCode: 200, data: (dataBaseResponse) ? [ dataBaseResponse ] : [] });
    }

    const regex = new RegExp( term, 'i' );
    const dataBaseResponse = await findUserByNameOrEmail(regex);
    return res.status(200).json({ statusCode: 200, data: (dataBaseResponse) ? [ dataBaseResponse ] : [] });
}

const searchProduct = async ( term = '', res = response ) => {
    const isMongoId = Types.ObjectId.isValid(term);
    if (isMongoId) {
        const dataBaseResponse = await findProductById(term);
        return res.status(200).json({ statusCode: 200, data: (dataBaseResponse) ? [ dataBaseResponse ] : [] });
    }

    const regex = new RegExp( term, 'i' );
    const dataBaseResponse = await findProductsByName(regex);
    return res.status(200).json({ statusCode: 200, data: (dataBaseResponse) ? [ dataBaseResponse ] : [] });
}

const searchCategory = async ( term = '', res = response ) => {
    const isMongoId = Types.ObjectId.isValid(term);
    if (isMongoId) {
        const dataBaseResponse = await findCategoryById(term);
        return res.status(200).json({ statusCode: 200, data: (dataBaseResponse) ? [ dataBaseResponse ] : [] });
    }

    const regex = new RegExp( term, 'i' );
    const dataBaseResponse = await findCategoriesByName(regex);
    return res.status(200).json({ statusCode: 200, data: (dataBaseResponse) ? [ dataBaseResponse ] : [] });
}

let statusCode = 0;

const searchBy = async ( req = request, res = response ) => {
    const { entity, searchTerm } = req.params;

    if ( !entities.includes(entity) ) {
        statusCode = 400;
        return handleHttpError( res, statusCode, 'HTTP_SEARCH_ERROR', `Entities Permiteds: ${ entities }` );
    }

    switch ( entity ) {
        case 'user':
            searchUser( searchTerm, res );
        break;
        case 'product':
            searchProduct( searchTerm, res );
        break;
        case 'category':
            searchCategory( searchTerm, res );
        break;
        case 'role':
        break;
        default:
            statusCode = 500;
            return handleHttpError( res, statusCode, 'HTTP_SEARCH_ERROR', `Invalid Entity` );
    }
}

module.exports = {
    searchBy
}