import React from 'react';
import '../css/main.css';
import '../css/product.css';
import Header from '../js/header';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';


function Products() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location params product page',location.state)
    return ( 
        <>
        <div>
            <Header/>
        </div>
        </>
     );
}

export default Products;