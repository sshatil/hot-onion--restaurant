import React from 'react'

const FoodCategory = ({filter}) => {
    return (
      <div>
        <button onClick={() => filter("Breakfast")}>Breakfast</button>
        <button onClick={() => filter("Lunch")}>Lunch</button>
        <button onClick={() => filter("Dinner")}>Dinner</button>
      </div>
    );
}

export default FoodCategory
