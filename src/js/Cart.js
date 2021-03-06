import React from 'react'
import '../css/main.css';
import '../css/login.css'
import Header from './header';
import '../css/product.css';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from './cart_item'
import { Form, Button, Card, Alert } from "react-bootstrap"
import {useNavigate} from 'react-router-dom';
import {data_actions} from '../store/data_slice'
import cart_empty from '../img/cart_empty.jpeg'
import {cart_actions} from '../store/cart_slice'

function Cart() {
const navigator = useNavigate();
  const dispatch = useDispatch();
  const cart_items = useSelector(state => state.cart.cart_items);
 const cart_total = useSelector(state => state.cart.total_price);
  const card_holder_name = 'John Doe'
  const credit_card_no = useSelector(state => state.data.credit_card_no);
  const card_default_value = '2022-02-02'
  //console.log('cart_items in the cart page',cart_items);
  console.log('cart_total in the cart page',useSelector(state => state.cart));
  const cvv = 'XXX';

  const navigate_to_cart = () => {
    //send a dispatch to the store to update the cart
    console.log('sending dispatch to update the payment page')
    dispatch(data_actions.set_cart_details({items_sub_total: cart_total }));
    //set cart_items to empty array
    console.log('resetting cart items');
    dispatch(cart_actions.reset_cart());
    navigator('/payment');
}
const [cart_flag, set_cart_flag] = React.useState(true);
React.useEffect(() => {
    if(cart_items.length === 0){
      set_cart_flag(false);
    }
    else{
        set_cart_flag(true);
    }
}, [cart_items]);
console.log('cart_flag',cart_flag);
  return (
    <><div>
        <Header />
        </div>
        <div className='cart-container'>
            <div className='cart_items_container'>
                <div>
                    {(cart_flag)?cart_items.map((item,index) => (
                        <CartItem key={index} item={item}/>
                    )):<img src={cart_empty} alt='cart_empty'/>
}
                   {cart_flag&&<h1 className='mt-5 push-right'>Cart Total: ${cart_total} </h1>}                     
                    </div>
            </div>
            <div className="h-50 p-5 m-5 payment-container">
                    <Card className="p-5 payment-card">
                        <Card.Body>
                        <h2 className="text-center mb-4">PAYMENT DETAILS</h2>
                        <Form className="payment-form">
                            <Form.Group className="mb-4" id="email">
                            <Form.Label><h2>Card Number</h2></Form.Label>
                            <Form.Control type="text" defaultValue={credit_card_no} required />
                            </Form.Group>
                            <div className='mt-4 row'>
                                <div className='col-sm-8'>
                                <Form.Group className="mb-4" id="email">
                                    <Form.Label><h2>Expiry (MM/YY)</h2></Form.Label>
                                    <Form.Control type="date" defaultValue={card_default_value} required />
                                </Form.Group>                                
                                </div>
                                <div className='col-sm-4'>
                                    <Form.Group className="mb-4" id="email">
                                        <Form.Label><h2>CVV</h2></Form.Label>
                                        <Form.Control type="text" defaultValue={cvv} required />
                                    </Form.Group>                            
                                </div>    
                            </div>
                            <Form.Group className="mb-4" id="email">
                            <Form.Label><h2>Card Holder Name</h2></Form.Label>
                            <Form.Control type="name" defaultValue={card_holder_name} required />
                            </Form.Group>
                            <a onClick={()=>{cart_flag && navigate_to_cart()}}>
                            <Button className="w-100 login-btn mt-4">
                                Confirm Payment
                            </Button>
                            </a>
                        </Form>
                        </Card.Body>
                    </Card>  
            </div>
        </div>    
        
    </>
  )
}

export default Cart