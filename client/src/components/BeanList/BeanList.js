import React, { useState, useEffect } from "react";
import axios from "axios";

function BeanList({ beans, onBeanClick }) {
  const [myBeans, setMyBeans] = useState([]);
  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const userID = sessionStorage.getItem("userID");

        const response = await axios.get(
          `http://localhost:8080/api/users/${userID}/beans`
        );
        setMyBeans(response.data);
      } catch (error) {
        console.error("Error fetching your beans:", error);
      }
    };
    fetchBeans();
  }, []);
  return (
    <section className="bean-list">
      <h2> My Beans</h2>
      <ul>
        {myBeans.map((bean) => (
          <li key={bean.id} onClick={() => onBeanClick(bean)}>
            {bean.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BeanList;
