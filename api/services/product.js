let db = require('../db');

class Product {
    async createProduct(name, part, price) {
        return await db('products').insert({
            name: name,
            part: part,
            price: price
        }).returning('id');
    }

    async getProduct(id) {
        return await db('products').where({
            id:id
        }).select('*');
    }

    async updateProduct(id, name, part, price) {
        return await db('products').where({
            id:id
        }).update({
            name:name,
            part:part,
            price:price
        });
    }

    async deleteProducts(id) {
        return await db('products').where({
            id:id
        }).del().returning('id');
    }
}

module.exports = new Product();