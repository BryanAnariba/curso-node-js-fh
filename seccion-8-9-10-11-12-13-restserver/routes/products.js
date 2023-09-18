const { Router } = require('express');
const { verifyAuthenticationAccess, validator, isAdminRole } = require('../middlewares');
const { check } = require('express-validator');
const { createItem, getItems, getItem, editItem, deleteItem } = require('../controllers/Products');
const { verifyCategory, verifyProduct } = require('../utils/validatorsHandle');

const router = Router();

// TODO: obtener todas los productos - publico
router.get( 
    '', 
    getItems 
);

// TODO: obtener producto por id - publico
router.get(
    '/:productId',
    [
        check('productId').custom( productId => verifyProduct( productId ) ),
        validator
    ],
    getItem
);

// TODO: crear producto - private - cualquier persona con token valido
router.post(
    '',
    [
        verifyAuthenticationAccess,
        check( 'categoryId' ).custom( categoryId => verifyCategory( categoryId ) ),
        check('productName','Product Name is required').not().isEmpty(),
        check('productDescription','Product Description Name is required').not().isEmpty(),
        validator,
    ],
    createItem,
);

// TODO: actualizar producto - private - cualquier persona con token valido
router.put(
    '/:productId',
    [
        verifyAuthenticationAccess,
        check('productId').custom( productId => verifyProduct(productId) ),
        check('productName','Product Name is required').not().isEmpty(),
        check('productDescription','Product Description is required').not().isEmpty(),
        validator
    ],
    editItem
)

// TODO: borrar producto por id - solo Admins
router.delete(
    '/:productId',
    [
        verifyAuthenticationAccess,
        isAdminRole,
        check('productId').custom( productId => verifyProduct(productId)),
        validator
    ],
    deleteItem
)

module.exports = router;