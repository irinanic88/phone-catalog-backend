const utils = require('./utils');

const { flattenProductList, getProductById } = utils;

const mockProducts = JSON.stringify({
    "123": {
        "id": "123",
        "name": "iPhone 11 PRO",
        "price": 395,
        "imageURL": "https://picsum.photos/id/101/200",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.",
        "color": "White",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    },
})

const returnedJsonArray = [{"id":"123","name":"iPhone 11 PRO","price":395,"imageURL":"https://picsum.photos/id/101/200"}];
const returnedProductById = {"id":"123","name":"iPhone 11 PRO","price":395,"imageURL":"https://picsum.photos/id/101/200","manufacturer":"Apple","description":"lorem ipsum dolor sit amet consectetur.","color":"White","screen":"4,7 inch IPS","processor":"A10 Fusion","ram":2};

describe('FlattenProductList', () => {
    test('it should return a json array when products data it passed as an argument', () => {
        expect(flattenProductList(mockProducts)).toEqual(returnedJsonArray);
    });
})

describe('GetProductById', () => {
    test('it should return a json object of a product that corresponds to passed id', () => {
        expect(getProductById(mockProducts, "123")).toEqual(returnedProductById);
    });
})