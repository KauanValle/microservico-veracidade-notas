const express = require('express');
const router = express.Router();
const CnpjController = require('../controllers/cnpjController')

router.post('/', CnpjController.validateCnpj);

module.exports = router;