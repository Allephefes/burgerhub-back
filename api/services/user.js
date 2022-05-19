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
}

module.exports = new User();