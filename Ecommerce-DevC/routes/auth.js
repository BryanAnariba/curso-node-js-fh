const { Router } = require( 'express' );
const { signIn } = require('../controllers/UserController');

const router = Router();

router.get( '/signin', signIn );

module.exports = router;