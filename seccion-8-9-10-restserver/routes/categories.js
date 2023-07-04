const { Router } = require( 'express' );

const { check } = require( 'express-validator' );

const { verifyAuthenticationAccess } = require('../middlewares/jwt');
const { validator } = require('../middlewares/validators');
const { createItem } = require('../controllers/Category');

const router = Router();

// TODO: obtener todas las categorias - publico
router.get( '', (req, res) => {
    return res.status(200).json({ statusCode: 200, data: 'Get-Categories Works' });
});

// TODO: obtener categoria por id - publico
router.get( '/:categoryId', (req, res) => {
    return res.status(200).json({ statusCode: 200, data: 'Get-One-Categories Works' });
});

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
router.put( '/:categoryId', (req, res) => {
    return res.status(200).json({ statusCode: 200, data: 'Put-Categories Works' });
});

// TODO: borrar categoria por id - solo Admins
router.delete( '/:categoryId', (req, res) => {
    return res.status(200).json({ statusCode: 200, data: 'Delete-One-Categories Works' });
});



module.exports = router;