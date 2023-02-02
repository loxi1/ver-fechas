const express = require("express");

const app = express();
const FechaRoter = require('./routes/FechaRoter');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json({ extended: true }));
app.use(express.urlencoded());

app.use("/", FechaRoter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log("Servidor escucha el puerto 3000")
});