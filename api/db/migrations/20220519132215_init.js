/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').notNullable().unique();
            table.string('username', 255).notNullable();
            table.string('password', 255).notNullable();
            table.string('auth', 255).notNullable();
            table.timestamps(true, true);
        })
        .createTable('products', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('part', 255).notNullable();
            table.decimal('price').notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("products")
        .dropTable("users");
};
