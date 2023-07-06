const { Router } = require('express');

const router = Router();

// TODO: obtener todas los productos - publico
router.get('', (req, res) => {
    return res.status( 200 ).json({ statusCode: 200, data: 'Get Products Works' })
});

// TODO: obtener producto por id - publico

// TODO: crear producto - private - cualquier persona con token valido

// TODO: actualizar producto - private - cualquier persona con token valido

// TODO: borrar producto por id - solo Admins

module.exports = router;