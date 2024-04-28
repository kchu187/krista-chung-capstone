/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("beans").del();
  await knex("beans").insert([
    {
      id: 1,
      user_id: "1",
      name: "Ten Foot Henry",
      userrating: "4",
      comments: "Great food here!",
      coordinates: JSON.stringify({
        latitude: 51.041083366219205,
        longitude: -114.06598360272451,
      }),
      address: "1209-1st Street South West",
      wishbean: "No",
    },
  ]);
};
