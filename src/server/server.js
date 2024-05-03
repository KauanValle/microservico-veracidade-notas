const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const headerMiddleware = require('./middleware/validateHeader')

app.use(bodyParser.json());
app.use('/veracidade-nota', headerMiddleware, require('./routes/cnpjValidator'))

app.listen(3000)