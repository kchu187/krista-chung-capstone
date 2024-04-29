const knex = require("knex")(require("../knexfile"));

const router = require("express").Router();

//GET request for retrieving all beans for a specific user ID

router.get("/:userId/beans", async (req, res) => {
  const userID = req.params.userId;

  try {
    //Query database for beans w/ user ID
    const beans = await knex("beans").where({ user_id: userID });

    res.json(beans);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch beans for the user" });
  }
});

module.exports = router;
