# Phone Catalog (Backend)
Simple Phone catalog made with React, Node.js and Express.js technologies.
Try it out [here]( https://pacific-sea-88253.herokuapp.com/).
## Table of contents 
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
## General info
The Phone Catalog project consists of two parts: [REACT APP]( https://github.com/irinanic88/phone-catalog), REST API. 

This repo contains only the Rest API part of the application.

The backend part consists of a simple json-file database and a server. The server provides the following API:
* `[GET] /products` – to load list of products with minimal necessary information about each of
 them
* `[GET] /products/{id}` – to load an object of selected product that contains a detailed
 product description

Detailed information and source code of the REACT APP you can find in [this repository]( https://github.com/irinanic88/phone-catalog).
## Technologies
Project is created with:
* Node.js 16.13.2
* Express 4.17.3

## Setup
To run the project, install it locally using npm:
```
$ npm install
$ npm start
```
To run tests:
```
$ npm test
```
You may specify the port inside the `variables.js` file, `port` variable.