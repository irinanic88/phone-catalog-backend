const express = require('express');
const fs = require('fs');
const cors = require('cors');
const utils = require('./utils');
const variables = require('./variables');

const { flattenProductList, getProductById } = utils;
const { port } = variables;

const app = express();

app.use(cors());

app.get('/products', (req, res) => {
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(flattenProductList(data));
    })
});

app.get('/products/:id', (req, res) => {
    const requestedId = req.params.id;

    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(getProductById(data, requestedId));
    })

});

app.listen(port);