const { request, response } = require("express");
const { handleHttpError } = require("../utils/handleHttp");

let statusCode = 0;

const createItem = async ( req = request, res = response ) => {
    try {

    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 0;
        return handleHttpError( res, statusCode, 'HTTP_CREATE_PRODUCT_ERROR', error.message );
    }
}

const getItem = async ( req = request, res = response ) => {
    try {

    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 0;
        return handleHttpError( res, statusCode, 'HTTP_GET_PRODUCT_ERROR', error.message );
    }
}

const getItems = async ( req = request, res = response ) => {
    try {

    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 0;
        return handleHttpError( res, statusCode, 'HTTP_GET_PRODUCTS_ERROR', error.message );
    }
}

const editItem = async ( req = request, res = response ) => {
    try {

    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 0;
        return handleHttpError( res, statusCode, 'HTTP_EDIT_PRODUCT_ERROR', error.message );
    }
}

const deleteItem = async ( req = request, res = response ) => {
    try {

    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 0;
        return handleHttpError( res, statusCode, 'HTTP_DELETE_PRODUCT_ERROR', error.message );
    }
}

module.exports = {
    createItem,
    getItem,
    getItems,
    editItem,
    deleteItem,
}