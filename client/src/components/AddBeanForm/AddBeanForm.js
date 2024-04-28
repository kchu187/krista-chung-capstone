const AddBeanForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const notes = formData.get("notes");
    onSubmit({ notes });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Notes:</label>
      <br></br>
      <input type="text" id="notes" name="notes" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBeanForm;
