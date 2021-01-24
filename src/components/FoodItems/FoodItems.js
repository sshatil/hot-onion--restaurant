import React, { useState } from 'react'
import data from "../../fakeData/data"
import AllItems from '../AllItems/AllItems'
import FoodCategory from '../FoodCategory/FoodCategory'

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState(data)
    const filter = (foodType) => {
        const filterData = data.filter((item) => item.type === foodType);
        setFoodItems(filterData)
    }
    return (
      <div>
        <FoodCategory filter={filter} />
        {foodItems.map((foodItem) => (
          <AllItems foodItem={foodItem}></AllItems>
        ))}
        {/* <AllItems foodItems={foodItems}/> */}
      </div>
    );
}

export default FoodItems
