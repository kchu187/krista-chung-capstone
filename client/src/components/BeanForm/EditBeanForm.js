import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

import ratedBean from "../../assets/images/bean.png";
import notRatedBean from "../../assets/images/bean-norating.png";

function EditBeanForm({ bean, onSubmit, onClose }) {
  const [rating, setRating] = useState(bean.userrating);
  const [comments, setComments] = useState(bean.comments);

  useEffect(() => {
    setRating(bean.userrating);
    setComments(bean.comments);
  }, [bean]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `${baseUrl}api/users/${bean.user_id}/beans/${bean.id}`,
        {
          userRating: rating,
          comments,
        }
      );
      console.log("Bean updated successfully:", response.data);
      onClose();
    } catch (error) {
      console.error("Error updating bean:", error);
    }
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <form className="bean-form--edit" onSubmit={handleSubmit}>
      <button onClick={onClose}>Close</button>

      <h2>Edit your bean for {bean.name}</h2>
      <div className="bean-form__rating">
        <p>Rate out of 5 beans:</p>
        {[1, 2, 3, 4, 5].map((ratingValue) => (
          <img
            className="bean-form__rating-images"
            key={ratingValue}
            src={ratingValue <= rating ? ratedBean : notRatedBean}
            alt={"bean"}
            onClick={() => handleRating(ratingValue)}
          />
        ))}
      </div>
      <label> Comments:</label>
      <br></br>
      <textarea
        className="bean-form__comments"
        type="text"
        id="comments"
        value={comments}
        onChange={handleCommentsChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditBeanForm;
