import React, { useContext } from "react";
import { FoodContext } from "../../App";
import "./OrderCart.css";

const OrderCart = () => {
  const [orderFood, setOrderFood] = useContext(FoodContext);
  console.log(orderFood);
  return (
    <div className="order-container">
      <div className="order-food">
        {orderFood.map((food) => (
          <div className="food">
            <div className="img">
              <img src={food.img} alt="" />
            </div>
            <h3>Food Name: {food.name}</h3>
            <p>Price: {food.price}</p>
            <p>Quantity: {food.quantity}</p>
            <p>Price: {food.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCart;
