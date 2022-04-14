import './App.css';
import Main from './js/main.js';
import Login from './js/login.js';
import Cart from './js/Cart.js';
import Signup from './js/signup';
import Signup_comp from './js/signup_comp';
import 

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
