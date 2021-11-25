import React from "react";
import FoodItems from "../FoodItems/FoodItems";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <FoodItems />
    </div>
  );
};

export default Home;
