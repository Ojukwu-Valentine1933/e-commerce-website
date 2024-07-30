import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/Layout/ProtectedRoute";

import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {

  const user =  true
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/register" element={<ProtectedRoute user={user}><Register/></ProtectedRoute>}></Route>
        <Route path="/login"  element={<ProtectedRoute user={user}><Login/></ProtectedRoute>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        
      </Routes>
    </Router>
  )
};

export default App;