import React, { useContext } from "react";
import logo from "../../images/logo2.png";
import "./Navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { FoodContext } from "../../App";

const Navbar = () => {
  const [orderFood, setOrderFood] = useContext(FoodContext);
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to={"/"}>
          <img src={logo} alt="restaurant log" />
        </Link>
      </div>
      <div className="right-side">
        <div className="shopping-logo">
          <Link to={"/orderCart"}>
            <ShoppingCartIcon className="order-cart" />
          </Link>
          <h6>{orderFood.length}</h6>
        </div>
        <p>Login</p>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
