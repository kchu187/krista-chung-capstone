/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("beans", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    //   .unsigned()
    //   .references("id")
    //   .inTable("users")
    //   .onDelete("CASCADE");

    table.string("name").notNullable();
    table.integer("userrating").notNullable();
    table.string("comments").notNullable();
    table.json("coordinates").notNullable();
    table.string("address").notNullable();
    table.string("wishbean").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("beans");
};
