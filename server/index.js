require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());

app.get("/api/yelp/search", async (req, res) => {
  const { term, location } = req.query;
  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
      {
        headers: {
          Authorization:
            "Bearer ljQe5jwVEr05efrSFfcKgcvBnwgUP2XSRyNnx8Yjpdap7kApeRefiHAeKOx_3ObKiZQtLRwTYDt3YvPGUxv_tNkdaWhI4fReG3Pko9Q4-ZVG-GLpCm_jdOXi0t0UZnYx",
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from the Yelp API:", error);
    res.status(500).json({ error: "Error fetching data from Yelp API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
//
