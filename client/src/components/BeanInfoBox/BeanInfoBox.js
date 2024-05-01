const BeanInfoBox = ({ restaurant, onClose, onAddBean }) => {
  const handleAddBean = () => {
    onAddBean(restaurant);
  };

  return (
    <div className="bean-info-box">
      <h3> {restaurant.name} </h3>
      <p> {restaurant.location.address1} </p>
      <button onClick={handleAddBean}>Add a Bean</button>
    </div>
  );
};

export default BeanInfoBox;
