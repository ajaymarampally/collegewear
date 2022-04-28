import React from 'react'
import Header from './header';
import '../css/payment.css'
import {useDispatch, useSelector} from 'react-redux';

function Payment() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    console.log('data in the payment page',data);
    return (
    <>
        <Header />
        <div className='row ml-3 mt-5'>
            <h1>ORDER DETAILS</h1>
            <h1>Your Order is Confirmed!</h1>
            <div className='col-sm-4'>
                <p>Order on {data.order_date} | Order #{data.order_no}</p>
                <div className='split-container'>
                    <div className='shipping-container'>
                        <h2>Shipping Address</h2>
                        <p>{data.shipping_address}</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-4 mt-5'>
                        <h2>Payment Method</h2>
                        <p>Credit Card Number: {data.credit_card_no}</p>
            </div>
            <div className='col-sm-4 mt-5'>
                <h1>ORDER SUMMARY</h1>
                <div>
                    <ul>
                        <li>Items Subtotal: ${data.items_sub_total}</li>
                        <li>Shipping Cost: ${data.shipping_cost}</li>
                        <li>Estimated Tax: ${data.estimated_tax}</li>
                        <li>Total Before Tax: ${data.total_before_tax}</li>
                        <li>Grand Total: ${data.grand_total}</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment