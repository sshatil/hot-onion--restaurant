import React, { useContext } from "react";
import { FoodContext } from "../../App";
import "./OrderCart.css";

const OrderCart = () => {
  const [orderFood, setOrderFood] = useContext(FoodContext);
  const totalPrice = orderFood.map((item) => item.totalPrice);
  const result = totalPrice.reduce((sum, item) => sum + item, 0);
  return (
    <>
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
      <div className="total-price">
        <h3>Total Price: {result}$</h3>
        <button>Confirm Your order</button>
      </div>
    </>
  );
};

export default OrderCart;
