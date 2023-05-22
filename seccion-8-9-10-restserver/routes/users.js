const { Router } = require( 'express' );
const { findItems, findItem, createItem, updateItem, deleteItem } = require('../controllers/User');
const { check } = require('express-validator');
const { validator } = require('../middlewares/validators');
const { verifyRole, verifyEmail, verifyUserById } = require('../utils/validatorsHandle');

const router = Router();

router.get( '', findItems );

router.get( '/:userId', findItem );

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

router.delete( 
    '/:userId', 
    [
        check( 'userId' ).custom( ( userId ) => verifyUserById( userId ) ),
        validator,
    ],
    deleteItem 
);

module.exports = router;