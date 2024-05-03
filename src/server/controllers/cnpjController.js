const { validarCnpjMadeira } = require('../services/cnpjService')

exports.validateCnpj = (req, res) => {
    const { cnpj } = req.body;
    let isValid = validarCnpjMadeira(cnpj);
    return res.json({
        isValid: isValid
    })
}