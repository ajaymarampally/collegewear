import React from 'react';
import '../css/main.css';
import '../css/product.css';
import Header from '../js/header';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            loading: false,
        }
    }
    render(){
        return(
            <>
            <div>
                <Header />
            </div>
            <div>
                <h1>Products</h1>
            </div>
            </>
        );
    }
    
    
}

export default Products;