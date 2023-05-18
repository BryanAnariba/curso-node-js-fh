const { Router } = require( 'express' );
const { findItems, findItem, createItem, updateItem, deleteItem } = require('../controllers/User');

const router = Router();

router.get( '', findItems );

router.get( '/:userId', findItem );

router.post( '', createItem );

router.put( '/:userId', updateItem );

router.delete( '/:userId', deleteItem );

module.exports = router;