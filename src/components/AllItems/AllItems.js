import React from "react";
import { Link } from "react-router-dom";
import "./AllItems.css";

const AllItems = (props) => {
  const { img, name, price, title, id } = props.foodItem;
  return (
    <div>
      <Link className="send-data" to={"/item/" + id}>
        <div className="all-items">
          {/* <div className="items"> */}
          <img src={img} alt="" />
          <h4>{name}</h4>
          <p>{title}</p>
          <h4>$ {price}</h4>
          {/* </div> */}
        </div>
      </Link>
    </div>
  );
};

export default AllItems;
