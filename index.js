import { flattenProductList, getProductById } from './utils';

const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(flattenProductList(data));
    })
});

app.get('/products/:id', (req, res) => {
    const requestedId = req.params.id;

    fs.readFile('products.json', 'utf8', (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(getProductById(data, requestedId));
    })

});

app.listen(8080);