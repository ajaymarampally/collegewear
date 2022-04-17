import './App.css';
import './css/main.css';
import './css/login.css';
import './css/product_desc.css';
import './css/product.css';
import Main from './js/main.js';
import Login from './js/login.js';
import Cart from './js/Cart.js';
import Signup from './js/signup';
import Signup_comp from './js/signup_comp';
import Product_desc from './js/product_desc.js';
import Products from './js/product.js';
import Test from './js/test';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup_comp' element={<Signup_comp />} />
          <Route path='/product_desc' element={<Product_desc />} />
          <Route path='/products/product_desc' element={<Product_desc />} />
          <Route path='/products/*' element={<Products />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
