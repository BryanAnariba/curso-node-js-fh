const { Router } = require( 'express' );
const { check } = require('express-validator');

const { findItems, findItem, createItem, updateItem, deleteItem } = require('../controllers/User');
const { verifyRole, verifyEmail, verifyUserById } = require('../utils/validatorsHandle');
const { validator, verifyAuthenticationAccess, isAdminRole, isInRole } = require( '../middlewares' );

const router = Router();

router.get( 
    '', 
    findItems 
);

router.get( 
    '/:userId', 
    findItem 
);

/*
    PLUS: PENSAR EN LA POSIBILIDAD DE UN REFRESH TOKEN DEACUERDO A LA EXCEPCION LANZADA POR EL MIDDLEWARE DE VERIFICACION DE ACCESO => TokenExpiredError
    {
        "statusCode": 401,
        "data": {
            "error": "HTTP_ACCESS_ERROR",
            "errorMessage": {
                "name": "TokenExpiredError",
                "message": "jwt expired",
                "expiredAt": "2023-07-04T14:34:50.000Z"
            }
    }
}
*/

router.post( 
    '', 
    [
        check( 'userName', 'User Name is required' ).not().isEmpty(),
        check( 'userPassword', 'Password is required, min: 6 letters' ).isLength({ min: 6 }),
        check( 'userEmail', 'Invalid Email' ).isEmail(),
        //check( 'userRole', 'Role is not valid' ).isIn( [ 'ADMIN', 'SALES', 'USER' ] ),
        check( 'userEmail' ).custom( ( userEmail ) => verifyEmail( userEmail ) ),
        check( 'userRole' ).custom( ( userRole ) => verifyRole( userRole ) ),
        validator,
    ],
    createItem );

router.put( 
    '/:userId', 
    [
        check( 'userId' ).custom( ( userId ) => verifyUserById( userId ) ),
        check( 'userName', 'User Name is required' ).not().isEmpty(),
        check( 'userPassword', 'Password is required, min: 6 letters' ).isLength({ min: 6 }),
        //check( 'userRole', 'Role is not valid' ).isIn( [ 'ADMIN', 'SALES', 'USER' ] ),
        check( 'userRole' ).custom( ( userRole ) => verifyRole( userRole ) ),
        validator,
    ],
    updateItem 
);

/*
    ---Private Route---> SOLO ADMIN LOGUEADOS PUEDEN REALIZAR EL BORRADO LOGICO
    [DELETE] 
*/
router.delete( 
    '/:userId', 
    [
        verifyAuthenticationAccess,
        //isAdminRole, un solo rol que es admin
        isInRole( 'ADMIN', 'SALES' ),
        check( 'userId' ).custom( ( userId ) => verifyUserById( userId ) ),
        validator,
    ],
    deleteItem 
);

module.exports = router;