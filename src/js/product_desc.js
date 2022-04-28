import React from 'react';
import '../css/main.css';
import '../css/product_desc.css';
import Header from '../js/header';
import Rating from '@mui/material/Rating';
import Button from "@material-ui/core/Button";
import {Button as Btn} from 'semantic-ui-react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {cart_actions} from '../store/cart_slice'
import { data_actions } from '../store/data_slice';
import {filter_actions} from '../store/filter_slice';

function Product_desc(){
    const location = useLocation();
    const dispatch = useDispatch();
    const[counter, setCounter] = React.useState(1);
    const [details_flag, setDetailsFlag] = React.useState(false);
    const [review_flag, setReviewFlag] = React.useState(false);
    const [size_select_flag, setSizeSelectFlag] = React.useState(false);
    //change size_select_flag on click 
    const handleSizeSelect = (e) => {
        console.log('size filter changed')
        //dispatch(filter_actions.set_size_select_flag());
        setSizeSelectFlag(!size_select_flag);
    }

    console.log('counter',counter);
    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };
    
    console.log('size_select_flag',size_select_flag);

    const handleAddToCart = () => {
        if(size_select_flag){
            dispatch(
                cart_actions.add_to_cart({
                    product_name: location.state.product_name,
                    product_rating: location.state.product_rating,
                    product_review_cnt: location.state.product_review_cnt,
                    product_price: location.state.product_price,
                    product_link:location.state.product_link,
                    quantity: counter
                })
            );
    
        }
        
    };

    const checkdisplay = () => {
        if(counter>1)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    const expandView = () => {
        if(details_flag)
        {
            setDetailsFlag(false);
        }
        else
        {
            setDetailsFlag(true);
        }
    };

    const expandViewReviews = () => {
        if(review_flag)
        {
            setReviewFlag(false);
        }
        else
        {
            setReviewFlag(true);
        }
    };
    return (  
        <>
            <Header/>
            <div className='row'>
                <div className='col-sm-5'>
                    <div className='product_img'>
                        <img src={location.state.product_link} alt='product' />
                    </div>
                </div>
                <div className='col sm-1 verticalLine-1'></div>
                <div className='col-sm-5'>
                <h1 className='mb-5'>{location.state.product_name}</h1>
                        <div className='h-flex'>
                            <Rating name="half-rating-read" defaultValue={parseInt(location.state.product_rating)} precision={0.5} readOnly />
                            <p><span className='review-css'>Reviews {location.state.product_review_cnt}</span></p>
                        </div>
                        <span className='price_span mt-3'>Price:<span className='price_css'>{location.state.product_price}</span> </span>
                        <div className='row'>
                            <div className='ciruclar-btn col-sm-4'>
                                <Btn onClick={()=>handleSizeSelect()} className='ui circular button mr-3'>XS</Btn>
                                <Btn onClick={()=>handleSizeSelect()} className='ui circular button mr-3'>S</Btn>
                                <Btn onClick={()=>handleSizeSelect()} className='ui circular button mr-3'>M</Btn>
                                <Btn onClick={()=>handleSizeSelect()} className='ui circular button mr-3'>L</Btn>
                                <Btn onClick={()=>handleSizeSelect()} className='ui circular button mr-3'>XL</Btn>
                            </div>
                            <div className='col-sm-6'>

                            </div>
                        </div>
                        <span className='price_span1'>Quantity</span>
                        <div className='row mt-4'>
                            <div className='col-sm-8'>
                                <ButtonGroup size="small" aria-label="small outlined button group">
                                {checkdisplay && <Button onClick={handleDecrement}>-</Button>}
                                {checkdisplay && <Button disabled>{counter}</Button>}
                                <Button onClick={handleIncrement}>+</Button>
                                </ButtonGroup>
                            </div>
                            <div className='col-sm-4'>
                                <Button onClick={handleAddToCart}>Add to Cart</Button>                        
                            </div>   
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='dropdown-view'>
                            <div className='row'>
                                <div className='col-sm-10'>
                                    <span><h1>Details</h1></span>                                
                                </div>
                                <div className='col-sm-2'>
                                <Button 
                                    sx={{
                                    "&.MuiButton-text": { color: "#db0000" },
                                    border: "2px black solid"
                                    }}
                                onClick={expandView} ><span className='expand_span'>+</span></Button>                                  
                                </div>
                            </div>
                            <div className='row list_style'>
                            {details_flag && <div className='details-container'>
                                                {location.state.product_description.map((detail,index) => {
                                                    return(
                                                        <div className='review-container-inner'>
                                                            <li>
                                                                <p>{index+1} . {detail}</p>
                                                            </li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }  
                            </div>

                        </div>
                        <div className='dropdown-view'>
                            <div className='row'>
                                <div className='col-sm-10'>
                                    <span><h1>Reviews</h1></span>                                
                                </div>
                                <div className='col-sm-2'>
                                <Button onClick={expandViewReviews} ><span className='expand_span'>+</span></Button>                                  
                                </div>
                            </div>
                            <div className='row list_style'>
                            {review_flag && <div className='review-container'>
                                                {location.state.product_reviews.map((review,index) => {
                                                    return(
                                                        <div className='review-container-inner'>
                                                            <li>
                                                                <p>{index+1} . {review}</p>
                                                            </li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }  
                            </div>

                        </div>
                         </div>
            </div>
        </>
    );
}

export default Product_desc;