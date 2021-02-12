import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../fakeData/data";
import FoodOrder from "../FoodOrder/FoodOrder";
import OrderCart from "../OrderCart/OrderCart";


const FoodItemsDetails = () => {
  const { productId } = useParams();
  const orderItems = data.find((food) => food.id == productId);
  //   console.log(foodItems);
  const [orderFood,setOrderFood] = useState([])
  const handleOrderCart = (orderItems) => {
    const newFood = [...orderFood, orderItems]
    setOrderFood(newFood)
  };
  console.log(orderFood);
  return (
    <div>
      <h1>{productId}</h1>
      {/* <FoodOrder orderItems={orderItems} handleOrderCart={handleOrderCart} />
      <OrderCart orderFood={orderFood} /> */}
    </div>
  );
};

export default FoodItemsDetails;
