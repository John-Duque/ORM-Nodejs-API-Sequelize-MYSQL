const express = require('express');
const routes = require('./routes/index.js'); // para conseguirmos acessar as rotas

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
