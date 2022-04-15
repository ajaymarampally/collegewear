import React from 'react';
import '../css/main.css';
import '../css/product_desc.css';
import Header from '../js/header';
import Rating from '@mui/material/Rating';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";



class Product_desc extends React.Component{
    handleIncrement = () => {
        console.log('increment');
        this.setState(state => ({ counter: state.counter + 1 }));
        console.log(this.state.counter);
      };
    
      handleDecrement = () => {
        this.setState(state => ({ counter: state.counter - 1 }));
      };

      addToCart = () => {
        console.log('add to cart', this.state.counter);

        }
    expandview = () => {
        console.log('expand view');
    }
    

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            loading: false,
            rating_value: 40,
            counter:1
        }
    }
    render(){
        const displayCounter = this.state.counter > 0;
        console.log(this.state.counter);
        return(
            <>
            <div>
                <Header />
            </div>
            <div className='product-desc'>
                <div className='image-container'>
                    <h1>Image Description</h1>
                    <div className='img-gallery'>
                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='product' />
                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='product' />
                    </div>
                </div>
                <div className='verticalLine'></div>
                <div className='product-desc-container'>
                    <div>
                        <h1>Product Name</h1>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <p>Number of Ratings</p>
                        <span>Price</span>
                        <div className='ciruclar-btn'>
                            <span className='circular-text'>S</span>
                        </div>
                        <div className='ciruclar-btn'>
                            <span className='circular-text'>S</span>
                        </div>
                        <div className='ciruclar-btn'>
                            <span className='circular-text'>M</span>
                        </div>
                        <div className='ciruclar-btn'>
                            <span className='circular-text'>L</span>
                        </div>
                        <div className='ciruclar-btn'>
                            <span className='circular-text'>XL</span>
                        </div>
                        <span><p>Quantity</p></span>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
                        {displayCounter && <Button disabled>{this.state.counter}</Button>}
                        <Button onClick={this.handleIncrement}>+</Button>
                        </ButtonGroup>
                        <Button onClick={this.addToCart}>Add to Cart</Button>
                        <div className='horizontalLine'></div>
                        <div className='dropdown-view'>
                            <span>Details</span>
                            <Button onClick={this.expandview} >+</Button>
                        </div>
                        <div className='dropdown-view'>
                            <span>Reviews</span>
                            <Button onClick={this.expandview} >+</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
        );
    }
}

export default Product_desc;