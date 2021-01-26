import React from "react";
import { useParams } from "react-router-dom";
import data from "../../fakeData/data";
import FoodOrder from "../FoodOrder/FoodOrder";

const FoodItemsDetails = () => {
  const { productId } = useParams();
  const orderItems = data.find((food) => food.id == productId);
//   console.log(foodItems);
  return (
    <div>
      <h1>{productId}</h1>
      <FoodOrder orderItems={orderItems} />
    </div>
  );
};

export default FoodItemsDetails;
