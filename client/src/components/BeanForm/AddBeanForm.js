import React, { useState } from "react";
import axios from "axios";
import ratedBean from "../../assets/images/bean.png";
import notRatedBean from "../../assets/images/bean-norating.png";
import { baseUrl } from "../../utils/utils";

const AddBeanForm = ({ onSubmit, onClose, selectedResult, onBeanAdded }) => {
  //State for bean rating
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [wishbean, setWishbean] = useState("No");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userID = sessionStorage.getItem("userID");

      // Send POST request to backend API
      const response = await axios.post(`${baseUrl}api/users/${userID}/beans`, {
        restaurantName: selectedResult.name,
        userRating: rating,
        comments,
        coordinates: selectedResult.coordinates,
        address: selectedResult.location.address1,
        wishbean,
      });
      console.log("Bean added successfully:", response.data);

      onBeanAdded();
      onSubmit();
    } catch (error) {
      console.error("Errors adding bean:", error);
    }
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleWishbeanToggle = () => {
    setWishbean(wishbean === "No" ? "Yes" : "No");
  };

  return (
    <form className="bean-form" onSubmit={handleSubmit}>
      <button onClick={onClose}>Close</button>
      <label>
        <input
          type="checkbox"
          checked={wishbean === "Yes"} // Check if wishbean is "Yes"
          onChange={handleWishbeanToggle}
        />
        Add to Wishbean
      </label>
      <br />

      <h2>Add a Bean for {selectedResult.name}</h2>
      <div className="bean-form__rating">
        <p>Rate out of 5 beans:</p>
        {[1, 2, 3, 4, 5].map((bean) => (
          <img
            className="bean-form__rating-images"
            key={bean}
            src={bean <= rating ? ratedBean : notRatedBean}
            alt={"bean"}
            onClick={() => handleRating(bean)}
          />
        ))}
      </div>
      <label>Comments:</label>
      <br></br>
      <textarea
        type="text"
        id="comments"
        name="comments"
        value={comments}
        onChange={handleCommentsChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBeanForm;
