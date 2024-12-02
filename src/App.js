import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  exact path="/" element={<Home />}/>
        <Route  exact path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
