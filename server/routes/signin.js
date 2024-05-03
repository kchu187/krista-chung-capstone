const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    //check database to ensure email and password match
    const { email, password } = req.body;
    const user = await knex("users").where({ email, password }).first();
    //if user exists, return user ID
    if (user) {
      //
      res.status(200).json({ userID: user.id });
    } else {
      res
        .status(401)
        .json({ message: "Invalid email or password, please try again" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "An error has occurred" });
  }
});
module.exports = router;
