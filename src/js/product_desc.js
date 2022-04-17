import React from 'react';
import '../css/main.css';
import '../css/product_desc.css';
import Header from '../js/header';
import Rating from '@mui/material/Rating';
import Button from "@material-ui/core/Button";
import {Button as Btn} from 'semantic-ui-react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Footer from '../js/footer';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Product_desc(){
    const location = useLocation();
    const navigate = useNavigate();
    const[counter, setCounter] = React.useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
        console.log(counter);
    };
    
    const handleAddToCart = () => {
        console.log("Added to cart");
    };

    const checkdisplay = () => {
        if(counter>0)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    const expandView = () => {
        console.log("Expand view");
    };
    console.log('product desc params',location.state)
    return (  
        <div>
            <Header/>
            <div className='product-desc'>
                <div className='image-container'>
                    <h1>Image Description</h1>
                    <div className='img-gallery'>
                        <img src={location.state.product_link} alt='product' />
                    </div>
                </div>
                <div className='verticalLine'></div>
                <div className='product-desc-container'>
                        <h1>{location.state.product_name}</h1>
                        <div className='h-flex'>
                            <Rating name="half-rating-read" defaultValue={parseInt(location.state.product_rating)} precision={0.5} readOnly />
                            <p>Reviews {location.state.product_review_cnt}</p>
                        </div>
                        <span>Price {location.state.product_price}</span>
                        <div className='h-flex'>
                            <div className='ciruclar-btn'>
                                <Btn className='ui circular button'>XS</Btn>
                            </div>
                            <div className='ciruclar-btn'>
                                <Btn className='ui circular button'>S</Btn>
                            </div>
                            <div className='ciruclar-btn'>
                                <Btn className='ui circular button'>M</Btn>
                            </div>
                            <div className='ciruclar-btn'>
                                <Btn className='ui circular button'>L</Btn>
                            </div>
                            <div className='ciruclar-btn'>
                                <Btn className='ui circular button'>XL</Btn>
                            </div>    
                        </div>
                        <span><p>Quantity</p></span>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                        {checkdisplay && <Button onClick={handleDecrement}>-</Button>}
                        {checkdisplay && <Button disabled>{counter}</Button>}
                        <Button onClick={handleIncrement}>+</Button>
                        </ButtonGroup>
                        <Button onClick={handleAddToCart}>Add to Cart</Button>
                        <div className='horizontalLine'></div>
                        <div className='dropdown-view'>
                            <span>Details</span>
                            <Button onClick={expandView} >+</Button>
                        </div>
                        <div className='dropdown-view'>
                            <span>Reviews</span>
                            <Button onClick={expandView} >+</Button>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Product_desc;