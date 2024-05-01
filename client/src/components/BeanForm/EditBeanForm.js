import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

import ratedBean from "../../assets/images/bean.png";
import notRatedBean from "../../assets/images/bean-norating.png";
function EditBeanForm({ bean, onSubmit, onClose }) {
  const {
    restaurantName,
    rating: existingRating,
    comments: existingComments,
  } = bean;

  const [rating, setRating] = useState(existingRating);
  const [comments, setComments] = useState(existingComments);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedComments = formData.get("comments");
    onSubmit({ ...bean, rating, comments: updatedComments });
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <form className="bean-form" onSubmit={handleSubmit}>
      <button onClick={onClose}>Close</button>
      <h2>Edit your bean for {restaurantName}</h2>
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
      <label> Comments:</label>
      <br></br>
      <textarea
        type="text"
        id="comments"
        name={comments}
        onChange={(event) => setComments(event.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditBeanForm;
