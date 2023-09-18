const { findUserByEmail, findUserById } = require("../services/users.service");
const { RoleModel } = require('../models'); // ABCsUMn8oOcyIbx7
const { findCategoryById } = require("../services/categories.service");
const { findProductById } = require("../services/products.service");

// Users Validations

const verifyRole = async ( userRole = '' ) => {
    const isRoleInDB = await RoleModel.findOne({ roleName: userRole });
    if ( !isRoleInDB ) {
        throw new Error( `The Role ${ userRole } does not exists in Coffee App` );
    }
}

const verifyEmail = async ( userEmail ) => {
    const isUserRegister = await findUserByEmail( userEmail );
    if ( isUserRegister ) {
        statusCode = 400
        throw new Error( `The user ${ userEmail } already exists in Coffee App` );
    }
}

const verifyUserById = async ( userId ) => {
    const existsUser = await findUserById( userId );
    if ( !existsUser ) {
        statusCode = 400
        throw new Error( `User not exists` );
    }
}

// Categories Validations
const verifyCategory = async ( categoryId ) => {
    const existsCategory = await findCategoryById( categoryId );
    if ( !existsCategory ) {
        statusCode = 400;
        throw new Error( `The category does not exists` );
    }
}

const verifyProduct = async (productId) => {
    const existsProduct = await findProductById( productId );
    if ( !existsProduct ) {
        statusCode = 400;
        throw new Error( `The product does not exists` );
    }
}

module.exports = {
    verifyRole,
    verifyEmail,
    verifyUserById,
    verifyCategory,
    verifyProduct,
}