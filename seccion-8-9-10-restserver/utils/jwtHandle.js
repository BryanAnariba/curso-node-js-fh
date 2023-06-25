const jwt = require('jsonwebtoken');

const createToken = ( uid = '' ) => {
    return new Promise(( resolve, reject ) => {
        const payload = { uid };
        jwt.sign( payload, `${ process.env.SECRET_KEY }`, { expiresIn: '1h' },
            ( err, token ) => {
                if ( err ) {
                    reject( err );
                }

                resolve( token );
            }
        );
    });
}

module.exports = {
    createToken,
}