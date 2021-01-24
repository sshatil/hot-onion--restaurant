import React, { useState } from 'react'
import data from "../../fakeData/data"
import AllItems from '../AllItems/AllItems'

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState(data)
    return (
        <div>
            {
                foodItems.map(foodItem => <AllItems foodItem={foodItem}></AllItems>)
            }
        </div>
    )
}

export default FoodItems
