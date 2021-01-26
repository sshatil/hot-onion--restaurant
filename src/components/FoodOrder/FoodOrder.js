import React, { useState } from 'react'
import "./FoodOrder.css"
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import OrderCart from '../OrderCart/OrderCart';

const FoodOrder = (props) => {
    const {name,details,price,img} = props.orderItems
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price)
    const addFood = () => {
        const totalFood = count + 1
        setCount(totalFood)
        const total = price * totalFood
        setTotalPrice(total);
    }
    const removedFood = () => {
        const totalFood = count - 1;
        setCount(totalFood);
        const total = price * totalFood;
        setTotalPrice(total);
    }
    console.log(totalPrice);

    return (
      <div className="food-order">
        <div className="order-left">
          <h4>{name}</h4>
          <p className="details">{details}</p>
          <div className="price">
            <h3 className="order-price">${totalPrice}</h3>
            <div className="order-count">
              <button onClick={addFood} className="add-btn">
                <AddIcon />
              </button>
              <span>{count}</span>
              <button onClick={removedFood} className="remove-btn">
                <RemoveIcon />
              </button>
            </div>
          </div>
          <button className="add-btn">Add</button>
        </div>
        <div className="order-right">
          <img src={img} alt="" />
        </div>
        <OrderCart orderItems={props.orderItems} />
      </div>
    );
}

export default FoodOrder
