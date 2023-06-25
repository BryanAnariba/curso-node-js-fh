const { Router } = require( 'express' );
const { findItem } = require('../controllers/User');
const { check } = require('express-validator');
const { validator } = require('../middlewares/validators');

const router = Router();

/*
    [POST] http://localhost:3500/api/auth/login
    {
        "userEmail": "",
        "userPassword": ""
    }
*/
router.post( 
    '/login', 
    [
        check( 'userEmail', 'Email is required' ).isEmail(),
        validator
    ],
    findItem 
);

module.exports = router;