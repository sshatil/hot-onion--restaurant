import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import FoodItemsDetails from "./components/FoodItemsDetails/FoodItemsDetails";
import OrderCart from "./components/OrderCart/OrderCart";
import { createContext, useState } from "react";
export const FoodContext = createContext()

function App() {
  const [orderFood,setOrderFood] = useState([])
  return (
    <FoodContext.Provider value={[orderFood, setOrderFood]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/item/:productId">
            <FoodItemsDetails />
          </Route>
          <Route path="/orderCart">
          <OrderCart />
        </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </FoodContext.Provider>
  );
}

export default App;
