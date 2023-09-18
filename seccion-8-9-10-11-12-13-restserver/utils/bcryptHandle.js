const { hashSync, compareSync, genSaltSync } = require( 'bcryptjs' );

const encryptPwd = ( password ) => {
    const salt =  genSaltSync( 10 );
    return hashSync( password, salt );
}

const decryptPwd =  ( password, passwordEncripted ) => {
    return compareSync( password, passwordEncripted );
}

module.exports = {
    encryptPwd,
    decryptPwd,
}