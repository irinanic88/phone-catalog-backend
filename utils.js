exports.flattenProductList = (data) => {
    const products = JSON.parse(data)
    const productsList = Object.values(products).map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        imageURL: product.imageURL
    }));

    return JSON.stringify(productsList);
}

exports.getProductById = (data, id) => {
    const products = JSON.parse(data);

    return products[id];
}