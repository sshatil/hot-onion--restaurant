import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import FoodItemsDetails from "./components/FoodItemsDetails/FoodItemsDetails";
import OrderCart from "./components/OrderCart/OrderCart";

function App() {
  return (
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
  );
}

export default App;
