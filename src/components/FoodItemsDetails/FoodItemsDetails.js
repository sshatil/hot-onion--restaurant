import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../fakeData/data";
// import FoodOrder from "../FoodOrder/FoodOrder";
// import OrderCart from "../OrderCart/OrderCart";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import OrderCart from "../OrderCart/OrderCart";
import { Link } from "react-router-dom";
import "./FoodItemsDetails.css";
import { FoodContext } from "../../App";
import plus from "../../images/logo/plus-solid.svg";
import minus from "../../images/logo/minus-solid.svg";

const FoodItemsDetails = () => {
  const { productId } = useParams();
  const orderItems = data.find((food) => food.id == productId);
  //   console.log(foodItems);

  //food order order
  const { name, details, price, img } = orderItems;
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  // console.log(typeof price);
  const addFood = () => {
    const totalFood = count + 1;
    setCount(totalFood);
    const total = price * totalFood;
    setTotalPrice(total);
  };
  const removedFood = () => {
    if (count === 0) {
      setCount(0);
    } else {
      let totalFood = count - 1;
      setCount(totalFood);
    }
    setTotalPrice(count * price);
  };
  //btn
  const [orderFood, setOrderFood] = useContext(FoodContext);
  const handleOrderCart = (orderItems) => {
    const newFood = [...orderFood, { ...orderItems, totalPrice: totalPrice }];
    setOrderFood(newFood);
  };
  console.log(orderFood);
  return (
    <div>
      {/* <FoodOrder orderItems={orderItems} handleOrderCart={handleOrderCart} />
      <OrderCart orderFood={orderFood} /> */}
      <div className="food-order">
        <div className="order-left">
          <h4>{name}</h4>
          <p className="details">{details}</p>
          <div className="price">
            <div className="order-price">
              <h3 className="">${totalPrice}</h3>
            </div>
            <div className="order-count">
              <button onClick={removedFood} className="remove-btn">
                <img src={minus} alt="" />
              </button>
              <p className="quantity">{count}</p>
              <button onClick={addFood} className="add-btn">
                <img src={plus} alt="" />
              </button>
            </div>
          </div>
          <Link to={"/orderCart"}>
            <button
              onClick={() => handleOrderCart(orderItems)}
              className="order-btn"
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
