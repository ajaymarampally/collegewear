import React from 'react';
import '../css/main.css';
import '../css/product.css';
import Header from '../js/header';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import ProductElement from './product_element';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@material-ui/core/Slider';


function Products() {
    const location = useLocation();
    const navigate = useNavigate();
    const elem_arr = Object.values(location.state)
    const [value, setValue] =  React.useState([2,10]);
  
    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
    };
    
    console.log('location params product page',location.state)
    return ( 
        <>
        <div>
            <Header/>
        </div>
        <div className='grid-container'>
            <div>
                <fieldset className='filter-container'>
                    <legend>
                        <h1>Filter Section</h1>
                    </legend>
                    <div>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Size</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="XS"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="XS" control={<Radio />} label="XS" />
                            <FormControlLabel value="S" control={<Radio />} label="S" />
                            <FormControlLabel value="M" control={<Radio />} label="M" />
                            <FormControlLabel value="L" control={<Radio />} label="L" />
                            <FormControlLabel value="XL" control={<Radio />} label="XL" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div>
                        <h1>Price Filter</h1>
                        <Slider
                            value={value}
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div>
                        <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="XS"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Black" control={<Radio />} label="Black" />
                            <FormControlLabel value="White" control={<Radio />} label="White" />
                            <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
                            <FormControlLabel value="Navy Blue" control={<Radio />} label="Navy Blue" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div>
                        <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Discount</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="XS"
                            name="radio-buttons-group"                        >
                            <FormControlLabel value="10% OFF and above" control={<Radio />} label="10% OFF and above" />
                            <FormControlLabel value="20% OFF and above" control={<Radio />} label="20% OFF and above" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                </fieldset>
            </div>
            <div className='elem-container'>
                <div className='elem-inner'>
                    {elem_arr.map((item,index)=>{
                        return <ProductElement key={index} item={item}/>
                    })}
                </div>
            </div>
        </div>
        </>
     );
}

export default Products;