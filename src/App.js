import "./App.css";
import FoodItems from "./components/FoodItems/FoodItems";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <FoodItems />
    </>
  );
}

export default App;
