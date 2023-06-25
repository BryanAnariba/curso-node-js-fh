const { request, response } = require("express");
const { handleHttpError } = require("../utils/handleHttp");
const { createUser, updateUserData, getTotalUsers, deleteUser, findUserByEmail } = require("../services/users.service");
const { encryptPwd, decryptPwd } = require("../utils/bcryptHandle");
const { getAllUsers } = require("../services/users.service");
const { createToken } = require("../utils/jwtHandle");

let statusCode = 0;

const findItems = async ( req = request, res = response ) => {
    try {
        const { skip = 0, limit = 10 } = req.query;

        // const dataBaseResponse = await getAllUsers( limit, skip );
        // const totalRecords = await getTotalUsers();

        const [ totalRecords, dataBaseResponse ] = await Promise.all(
            [
                getTotalUsers(),
                getAllUsers( limit, skip )
            ]
        );

        statusCode = 200
        return res.status( statusCode ).json({ statusCode: statusCode, data: { users: dataBaseResponse, total: totalRecords } });
    } catch ( error ) {
        statusCode = statusCode !== 0 ? statusCode : 500
        return handleHttpError( res, statusCode, 'HTTP_FIND_ITEM', error.message );
    }
}

const findItem = async ( req = request, res = response ) => {
    try {
        const { userEmail, userPassword } = req.body;
        const existsUser = await findUserByEmail( userEmail );

        // TODO: verificamos existencia de usuario
        if ( !existsUser ) {
            statusCode = 400;
            throw new Error( `The user ${ userEmail } does not exits` );
        }

        // TODO: verificar usuario activo
        if ( !existsUser.userStatus ) {
            statusCode = 400;
            throw new Error( `The user ${ userEmail } does not active` );
        }

        // TODO: verificamos clave
        const isMatchPwd = decryptPwd( userPassword, existsUser.userPassword );
        if ( !isMatchPwd ) {
            statusCode = 400;
            throw new Error( `Invalid Password` );
        }

        // TODO: generamos JWT
        const token = await createToken( existsUser._id );
        return res.status( 200 ).json({ statusCode: 200, data: { token, existsUser } });
    } catch ( error ) {
        statusCode = statusCode !== 0 ? statusCode : 500
        return handleHttpError( res, statusCode, 'HTTP_FIND_ITEMS', error.message );
    }
}

const createItem = async ( req = request, res = response ) => { 
    try {
        const { userName, userEmail, userPassword, userRole } = req.body;

        // TODO: encriptar clave de usuario
        const hashedUserPassword = encryptPwd( userPassword );

        // TODO: guardar
        const dataBaseResponse = await createUser({ userName: userName, userEmail: userEmail, userPassword: hashedUserPassword, userRole: userRole });

        statusCode = 201
        return res.status( statusCode ).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = statusCode !== 0 ? statusCode : 500
        return handleHttpError( res, statusCode, 'HTTP_CREATE_ITEM', error.message );
    }
}

const updateItem = async ( req = request, res = response ) => { 
    try {
        const { userId } = req.params;
        const { userName, userPassword, userRole } = req.body;

        let hashedUserPassword = '';
        if ( userPassword ) {
            hashedUserPassword = encryptPwd( userPassword );
        }

        const dataBaseResponse = await updateUserData( userId, { userName: userName, userPassword: hashedUserPassword, userRole: userRole } );
        statusCode = 200
        return res.status( statusCode ).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = statusCode !== 0 ? statusCode : 500
        return handleHttpError( res, statusCode, 'HTTP_UPDATE_ITEM', error.message );
    }
}

const deleteItem = async ( req = request, res = response ) => { 
    try {
        const { userId } = req.params;
        const dataBaseResponse = await deleteUser( userId );
        statusCode = 200
        return res.status( statusCode ).json({ statusCode: statusCode, data: dataBaseResponse });
    } catch ( error ) {
        statusCode = statusCode !== 0 ? statusCode : 500
        return handleHttpError( res, statusCode, 'HTTP_DELETE_ITEM', error.message );
    }
}

module.exports = {
    findItems,
    findItem,
    createItem,
    updateItem,
    deleteItem,
}