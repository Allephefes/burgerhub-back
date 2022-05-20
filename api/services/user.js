let db = require('../db');

class User {
    async createUser(username, password, auth) {
        return await db('users').insert({
            username: username,
            password: password,
            auth: auth
        }).returning('id');
    }

    async getUser(id) {
        return await db('users').where({
            id:id
        }).select('*');
    }

    async updateUser(id, username, password, auth) {
        return await db('users').where({
            id:id
        }).update({
            username:username,
            password:password,
            auth:auth
        });
    }

    async deleteUser(id, username, password, auth) {
        return await db('users').where({
            id:id
        }).del().returning('id');
    }
}

module.exports = new User();