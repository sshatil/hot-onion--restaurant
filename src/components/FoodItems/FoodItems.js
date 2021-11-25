import React, { useState } from "react";
import data from "../../fakeData/data";
import AllItems from "../AllItems/AllItems";
import FoodCategory from "../FoodCategory/FoodCategory";
import "./FoodItems.css";

const FoodItems = () => {
  const lunch = data.slice(6, 12);
  const [foodItems, setFoodItems] = useState(lunch);
  const filter = (foodType) => {
    const filterData = data.filter((item) => item.type === foodType);
    setFoodItems(filterData);
  };
  return (
    <div>
      <FoodCategory filter={filter} />
      <div className="food-container">
        {foodItems.map((foodItem) => {
          return (
            <div className="single-item">
              <AllItems foodItem={foodItem}></AllItems>
            </div>
          );
        })}
      </div>

      {/* <AllItems foodItems={foodItems}/> */}
    </div>
  );
};

export default FoodItems;
