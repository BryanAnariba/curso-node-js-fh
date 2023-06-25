const { findUserByEmail, findUserById } = require("../services/users.service");
const { RoleModel } = require('../models'); // ABCsUMn8oOcyIbx7

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

module.exports = {
    verifyRole,
    verifyEmail,
    verifyUserById,
}