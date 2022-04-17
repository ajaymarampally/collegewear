import React from 'react';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';


function ProductElement(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
            <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: props.item })
                }>
                <img src={props.item.product_link} className="image-thumbnail" alt="product_img"/>
                <p>{props.item.product_name}</p>
              </Button>
            </div>
            <div>
            <Rating name="half-rating-read" defaultValue={parseInt(props.item.product_rating)} precision={0.5} readOnly />
                <h1>{props.item.product_price}</h1>
            </div>               
        </div>
      );
}

export default ProductElement;