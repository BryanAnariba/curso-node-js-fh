const { Router } = require('express');
const { searchBy } = require('../controllers/Search');

const router = Router();

router.get(
    '/:entity/:searchTerm',
    searchBy
);

module.exports = router;