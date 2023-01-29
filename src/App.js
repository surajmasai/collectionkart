// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbars from './component/Navbar';
import { Route, Routes } from "react-router-dom"
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import { Login } from "./component/Login";
import { Register } from "./component/Register";
// import NavScrollExample from './component/Navbar';

function App() {
  return (
    <>
      {/* <NavScrollExample /> */}
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

      </Routes>

    </>
  );
}

export default App;
