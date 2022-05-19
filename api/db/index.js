let knex = require('knex');
let knexfile = require('./knexfile');
let pg = require('pg');

const db = (knex(knexfile.development));

module.exports = db;