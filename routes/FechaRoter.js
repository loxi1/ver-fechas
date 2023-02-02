const express = require("express");
const datetime = require('node-datetime');
const FechaRoter = express.Router();
let dt = datetime.create();
const estilo = `position: relative;
background-color: #4CAF50;
border: none;
font-size: 30px;
color: #FFFFFF;
padding: 25px;
width: 300px;
text-align: center;
transition-duration: 0.4s;
text-decoration: none;
overflow: hidden;
cursor: pointer;`

FechaRoter.get("/", async (req, res) => {
    res.send("<a href='/docs' style='text-decoration:none'><button style='"+`${estilo}`+"'><img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png'> Click Swagger UI</button></a>")
})

FechaRoter.get("/what-time", async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Ok",
            response: dt.format('I:M:S p')
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

FechaRoter.get("/what-date", async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Ok",
            response: dt.format('Y-m-d')
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

FechaRoter.get("/what-date-time", async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Ok",
            response: dt.format('Y-m-d I:M:S p')
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: error.message
        })
    }
})

module.exports = FechaRoter