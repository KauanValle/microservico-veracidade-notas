require('dotenv').config();

const headerMiddleware = (req, res, next) => {
    if(req.headers['authorization-token-service'] == process.env.AUTHORIZATION_API_TOKEN){
        next();
    }
    return res.status(401).json({ error: 'Requisição não autorizada, informe o Header correto.' });
  };
  
module.exports = headerMiddleware;