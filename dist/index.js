"use strict";
const displayProductInfo = (product) => {
    const stockStatus = product.inStock ? 'In Stock' : 'Out of Stock';
    console.log(`Product: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Category: ${product.category}`);
    if (product.description) {
        console.log(`Description: ${product.description}`);
    }
    console.log(`Availability: ${stockStatus}\n`);
};
const laptop = {
    id: 1,
    name: 'Laptop Pro',
    price: 1299.99,
    category: 'Electronics',
    inStock: true,
    description: 'Powerful laptop with 16GB RAM and 512 GB SSD',
};
const headphones = {
    id: 2,
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'Audio',
    inStock: false,
};
displayProductInfo(laptop);
displayProductInfo(headphones);
