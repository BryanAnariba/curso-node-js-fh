const { request, response } = require("express");
const { handleHttpError } = require("../utils/handleHttp");
const { createNewProduct, findProducts, findProductById, editProduct, deleteProduct } = require("../services/products.service");

let statusCode = 0;

const createItem = async ( req = request, res = response ) => {
    try {
        const { productName, productPrice, productDescription, categoryId } = req.body;
        const productData = {
            productName: productName.toUpperCase(),
            user: req.userData._id,
            productPrice: productPrice,
            productDescription: productDescription,
            category: categoryId
        }
        const dataBaseResponse = await createNewProduct(productData);
        statusCode = 201;
        return res.status(201).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 0;
        return handleHttpError( res, statusCode, 'HTTP_CREATE_PRODUCT_ERROR', error.message );
    }
}

const getItem = async ( req = request, res = response ) => {
    try {
        const { productId } = req.params;
        const dataBaseResponse = await findProductById(productId);
        statusCode = 200;
        return res.status(statusCode).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 0;
        return handleHttpError( res, statusCode, 'HTTP_GET_PRODUCT_ERROR', error.message );
    }
}

const getItems = async ( req = request, res = response ) => {
    try {
        const { limit = 10, skip = 0 } = req.query;
        const dataBaseResponse = await findProducts(limit, skip);
        statusCode = 200;
        return res.status(statusCode).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpError( res, statusCode, 'HTTP_GET_PRODUCTS_ERROR', error.message );
    }
}

const editItem = async ( req = request, res = response ) => {
    try {
        const { productId } = req.params;
        const { productName, productPrice, productDescription, isAvaliable, categoryId } = req.body;
        const productData = {
            productName: productName.toUpperCase(),
            productPrice: productPrice,
            productDescription: productDescription,
            category: categoryId,
            isAvaliable: isAvaliable
        };
        const dataBaseResponse = await editProduct(productId,productData);
        statusCode = 200;
        return res.status(statusCode).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttpError( res, statusCode, 'HTTP_EDIT_PRODUCT_ERROR', error.message );
    }
}

const deleteItem = async ( req = request, res = response ) => {
    try {
        const { productId } = req.params;
        const dataBaseResponse = await deleteProduct(productId);
        statusCode = 200;
        return res.status(statusCode).json({ statusCode: statusCode, data: dataBaseResponse });
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