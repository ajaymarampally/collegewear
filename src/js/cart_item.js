import React from 'react'
import { Button } from 'react-bootstrap';
import '../css/cart.css'
import { useSelector,useDispatch } from 'react-redux';
import { cart_actions } from '../store/cart_slice';

function CartItem(props) {
  const dispatch = useDispatch();
  let cart_items_total = 0;
  console.log('item_price',(props.item.product_price));
  console.log('cart_items_total',cart_items_total);
  const cart_items = useSelector(state => state.cart.cart_items);

  const get_item_quantity = (props) => {
    //find props.name in cart_items and get the quantity
    let item_quantity = 0;
    cart_items.forEach(item => {
      if (item.product_name === props.name) {
        item_quantity = item.quantity;
      }
    });
    return item_quantity
  }
  const handleRemoveFromCart = () => {
    dispatch(
      cart_actions.remove_from_cart({
        product_name: props.item.product_name,
        product_rating: props.item.product_rating,
        product_review_cnt: props.item.product_review_cnt,
        product_price: props.item.product_price,
        product_link:props.item.product_link,
        quantity: get_item_quantity({name: props.item.product_name})
      })
    );
  }
  const convert_to_int = (str) => {
    return parseInt(str.replace(/[^0-9\.]+/g, ""));
  }
  let price_var = convert_to_int(props.item.product_price);
  console.log('price_var',price_var);
  return (
    <div className='row mt-4'>
        <div className='col-sm-3 mt-4'>
          <img src={props.item.product_link} alt='product' />
        </div>
        <div className='col-sm-9 mt-4'>
          <div className='row mb-3'>
            <div className='col-sm-9'>
              <p>{props.item.product_name}</p>
            </div>
            <div className='col-sm-3'>
               <p>Product Price: {props.item.product_price}</p>
            </div>  
          </div>
          <p>Quantity: {props.item.quantity}</p>
          <div className='row mb-3'>
              <div className='col-sm-9 mt-4'>
                  <p>Total Price: ${(price_var) * (props.item.quantity)}</p> 
                  {()=>cart_items_total+=(price_var) * (props.item.quantity)}  

              </div>
              <div className='col-sm-3'>
                <Button variant="outline-danger" onClick={handleRemoveFromCart}>Remove From Cart</Button>
              </div>  
          </div>
        </div>
    </div>
  );
}

export default CartItem;