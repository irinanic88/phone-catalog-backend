const express = require('express');
const fs = require('fs');
const cors = require('cors');
const utils = require('./utils');
const variables = require('./variables');


const { port } = variables;
const { flattenProductList, getProductById } = utils;

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

        const foundProduct = getProductById(data, requestedId);

        if (!foundProduct) {
            res.status('404').end(`Product doesn't exist`);
        }

        res.send(getProductById(data, requestedId));
    })

});

app.listen(port);