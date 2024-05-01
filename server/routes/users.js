const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

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

//Generate unique ID
function generateUniqueId() {
  return Math.floor(Math.random() * 1000000);
}
//POST request to add a new bean for a specific user ID
router.post("/:userID/beans", async (req, res) => {
  const userId = req.params.userID;
  const {
    restaurantName,
    userRating,
    comments,
    coordinates,
    address,
    wishbean,
  } = req.body;

  //Ensure no properties are missing
  if (
    !restaurantName ||
    !userRating ||
    !comments ||
    !coordinates ||
    !address ||
    !wishbean
  ) {
    return res
      .status(400)
      .json({ message: "Missing required properties in request body" });
  }
  try {
    const beanId = generateUniqueId();

    await knex("beans").insert({
      id: beanId,
      name: restaurantName,
      user_id: userId,
      userrating: userRating,
      comments: comments,
      coordinates: JSON.stringify(coordinates),
      address: address,
      wishbean: wishbean,
    });
    res.status(201).json({ message: "Bean added successfully" });
  } catch (error) {
    console.error("Error adding new bean:", error);
    res.status(500).json({ error: "Unable to add new bean" });
  }
});
module.exports = router;
