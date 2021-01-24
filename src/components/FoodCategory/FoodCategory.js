import React from 'react'
import "./FoodCategory.css"

const FoodCategory = ({filter}) => {
    return (
      <div className="food-category">
        <button onClick={() => filter("Breakfast")}>Breakfast</button>
        <button onClick={() => filter("Lunch")}>Lunch</button>
        <button onClick={() => filter("Dinner")}>Dinner</button>
      </div>
    );
}

export default FoodCategory
