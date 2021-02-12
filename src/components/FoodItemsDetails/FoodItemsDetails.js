import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../fakeData/data";
// import FoodOrder from "../FoodOrder/FoodOrder";
// import OrderCart from "../OrderCart/OrderCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import OrderCart from "../OrderCart/OrderCart";
import { Link } from "react-router-dom";
import './FoodItemsDetails.css'
import { FoodContext } from "../../App";


const FoodItemsDetails = () => {
  const { productId } = useParams();
  const orderItems = data.find((food) => food.id == productId);
  //   console.log(foodItems);
  //btn
  const [orderFood,setOrderFood] = useContext(FoodContext)
  const handleOrderCart = (orderItems) => {
    const newFood = [...orderFood, orderItems]
    setOrderFood(newFood)
  };
  console.log(orderFood);

  //food order order
  const { name, details, price, img } = orderItems;
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const addFood = () => {
    const totalFood = count + 1;
    setCount(totalFood);
    const total = price * totalFood;
    setTotalPrice(total);
  };
  const removedFood = () => {
    const totalFood = count - 1;
    setCount(totalFood);
    const total = price * totalFood;
    setTotalPrice(total);
  };
  return (
    <div>
      <h1>{productId}</h1>
      {/* <FoodOrder orderItems={orderItems} handleOrderCart={handleOrderCart} />
      <OrderCart orderFood={orderFood} /> */}
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
          <Link to={"/orderCart"}>
          <button
            onClick={() => handleOrderCart(orderItems)}
            className="add-btn"
          >
            Add
          </button>
          </Link>
        </div>
        <div className="order-right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodItemsDetails;
