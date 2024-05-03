/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Krista",
      email: "kchung187@gmail.com",
      password: "Test123",
    },

    {
      id: 2,
      name: "Brainstation",
      email: "brainstation@brainstation.com",
      password: "Test123",
    },
  ]);
};
