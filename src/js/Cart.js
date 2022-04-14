import React from 'react'
import '../css/main.css';
import '../css/login.css'
import Header from './header';

class Cart extends React.Component{
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
            <><div>
                <Header />
            </div>
            <div className='cart-component'>
            </div></>
        );
    }
}

export default Cart;

