import React from 'react';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import '../css/product.css'

function ProductElement(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='image-container'>
            <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: props.item })
                }>
                <img src={props.item.product_link} className="image-thumbnail" alt="product_img"/>
              </Button>
            </div>
            <div className='img-name'>
                <p>{props.item.product_name}</p>
            </div>
            <div className='rating-price'>
            <Rating name="half-rating-read" defaultValue={parseInt(props.item.product_rating)} precision={0.5} readOnly />
            <h2>{props.item.product_price}</h2>
            </div>               
        </div>
      );
}

export default ProductElement;