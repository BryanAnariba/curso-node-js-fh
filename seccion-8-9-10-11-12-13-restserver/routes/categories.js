const { Router } = require( 'express' );

const { check } = require( 'express-validator' );

const { verifyAuthenticationAccess } = require('../middlewares/jwt');
const { validator } = require('../middlewares/validators');
const { createItem, getItems, getItem, updateItem, deleteItem } = require('../controllers/Category');
const { verifyCategory } = require('../utils/validatorsHandle');
const { isAdminRole } = require('../middlewares');

const router = Router();

// TODO: obtener todas las categorias - publico
router.get( '', getItems );

// TODO: obtener categoria por id - publico
router.get( 
    '/:categoryId', 
    [
        check( 'categoryId' ).custom( categoryId => verifyCategory( categoryId ) ),
        validator
    ],
    getItem
);

// TODO: crear categoria - private - cualquier persona con token valido
router.post( 
    '', 
    [
        verifyAuthenticationAccess,
        check('name', 'Category Name is required').not().isEmpty(),
        validator
    ],
    createItem
);

// TODO: actualizar categoria - private - cualquier persona con token valido
router.put( 
    '/:categoryId',
    [
        verifyAuthenticationAccess,
        check( 'categoryId' ).custom( categoryId => verifyCategory( categoryId ) ),
        validator
    ],
    updateItem
);

// TODO: borrar categoria por id - solo Admins
router.delete( 
    '/:categoryId', 
    [
        verifyAuthenticationAccess,
        isAdminRole,
        check( 'categoryId' ).custom( categoryId => verifyCategory( categoryId ) ),
        validator
    ],
    deleteItem
);

module.exports = router;