import React, { useState } from "react";

import ratedBean from "../../assets/images/bean.png";
import notRatedBean from "../../assets/images/bean-norating.png";

const AddBeanForm = ({ restaurantName, onSubmit, onClose }) => {
  //State for bean rating
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const notes = formData.get("notes");
    onSubmit({ restaurantName, rating, notes });
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <form className="bean-form" onSubmit={handleSubmit}>
      <button onClick={onClose}>Close</button>
      <h2>Add a Bean for {restaurantName}</h2>
      <div className="bean-form__rating">
        <p>Rate out of 5 beans:</p>
        {[1, 2, 3, 4, 5].map((bean) => (
          <img
            className="bean-form__rating-images"
            key={bean}
            src={bean <= rating ? ratedBean : notRatedBean} // Use appropriate paths for bean images
            alt={"bean"}
            onClick={() => handleRating(bean)}
          />
        ))}
      </div>
      <label>Notes:</label>
      <br></br>
      <textarea type="text" id="notes" name="notes" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBeanForm;
