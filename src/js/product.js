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
import {useSelector,useDispatch} from 'react-redux';
import {search_actions} from '../store/search_slice';
import {price_actions} from '../store/price_slice';
import Checkbox from '@mui/material/Checkbox';
import {filter_actions} from '../store/filter_slice';
import Button from '@mui/material/Button';


function Products(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let  elem_arr = Object.values(location.state)
    const [range_value, setRangeValue] = React.useState([15,45]);
    const [filtered_arr, setFilteredArr] = React.useState([]);
    const [pricearr, setPriceArr] = React.useState([]);
    const adv_flag = useSelector(state => state.filter.adv_flag);
    const dispatch_to_filter_slice = () => {
        
        dispatch(filter_actions.set_filter_arr(elem_arr));
        //send a dispatch to reset flags
        dispatch(filter_actions.reset_filter_flags());
        
    }
    let ten_percent_flag = useSelector(state => state.filter.adv_flag);
    React.useEffect(() => {
        dispatch_to_filter_slice();
        ten_percent_flag = false;
        console.log('adv_flag',adv_flag)
        elem_arr = Object.values(location.state);
        if(adv_flag){
            ten_percent_flag = true;
        }
        else{
            ten_percent_flag = false;
        }
    },[])


    console.log('ten_percent_flag',ten_percent_flag)
    console.log('36 items in product_page',elem_arr)
    //create an array to store the checked status of the checkbox elements 
    const [checkbox_arr, setCheckboxArr] = React.useState({
        XS:false,
        S:false,
        M:false,
        L:false,
        XL:false,
        BLACK:false,
        WHITE:false,
        BLUE:false,
        RED:false,
        GRAY:false,
        ten_percent:ten_percent_flag,
        twenty_percent:false,
        xs:0,
        s:1,
        m:2,
        l:3,
        xl:4,
        black:5,
        white:6,
        blue:7,
        red:8,
        gray:9,
        price_default:0
    });

    const price_marks = [
        {
          value: 0,
          label: '$0',
        },
        {
          value: 20,
          label: '$20',
        },
        {
          value: 40,
          label: '$40',
        },
        {
          value: 60,
          label: '$60',
        },
        {
            value: 80,
            label: '$80',
        },
        {
            value: 100,
            label: '$100',
        },
      ];

    const filter_arr = useSelector(state=>state.filter.filter_arr);
    console.log('filter_arr in product_page',filter_arr);

    const handleCheckedChange = (event) => {
        setCheckboxArr({ ...checkbox_arr, [event.target.name]: event.target.checked });
      };

    // Changing State when volume increases/decreases
    
    //check if the selected size is present in the product_size array of elem_arr and if present only select the elements of the array which are present in the product_size array

    const filter_flag = useSelector(state=>state.filter.filter_flag);
    const price_flag = useSelector(state=>state.filter.price_flag);

    let price_arr = useSelector(state=>state.price.price_filter_items);

    console.log('price_arr in product_page',price_arr);

    console.log('flags',filter_flag,price_flag)
    const convert_to_int = (value) => {
        //remove first character , then convert string to int
        return parseInt(value.substring(1));
    }

    const set_filter_flag = ()=>{
        //dispatch(filter_actions.set_filter_flag());
        dispatch(filter_actions.set_price_flag())
    }

    const price_filter_function = (props) => {
        //init price_arr to empty array
        setPriceArr([]);
        set_filter_flag();
        let temp = [];
        console.log('flags',price_flag,filter_flag)
        filter_arr.map(element=>{
            if(convert_to_int(element.product_price)>=(props[1])){
                //
                 }
            else{

                //push element to price_arr
                temp.push(element);
            }
        })
        console.log('temp_arr',temp)
        //replace price_arr with temp , change the filter array values to temp
        dispatch(filter_actions.set_filter_arr(temp));
        setPriceArr(temp);
    }


    console.log('filters in product_page',filter_flag,price_flag);

    const clear_filter_function = (props) => {
        //init filtered_arr to empty array
        //set checkboxarr to false
        setCheckboxArr({
            XS:false,
            S:false,
            M:false,
            L:false,
            XL:false,
            BLACK:false,
            WHITE:false,
            BLUE:false,
            RED:false,
            GRAY:false,
            ten_percent:false,
            twenty_percent:false,
            xs:0,
            s:1,
            m:2,
            l:3,
            xl:4,
            black:5,
            white:6,
            blue:7,
            red:8,
            gray:9,
            price_default:0
        });
        dispatch(filter_actions.clear_filter(props.cart_items));
        //send a dispatch to reset filter_flag and price_flag
        dispatch(filter_actions.reset_filter_flags());

    }

    return ( 
        <>
        <div>
            <Header/>
        </div>
        <div className='grid-container'>
            <div className='filter-border'>
                <fieldset className='filter-container'>
                    <legend>
                        <h1>Filter Section</h1>
                    </legend>
                    <a className='mt-2 btn btn-dark' onClick={()=>{clear_filter_function({cart_items:elem_arr});}}>
                        Clear Filter  
                    </a>
                    <div className='mt-2'>
                    <h1 className='mt-2'>Size Filter</h1>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.XS}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.search_filter([checkbox_arr.xs,e.target.name,elem_arr,checkbox_arr.XS]))}}
                                    name="XS"
                                />
                                }
                                label="XS"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.S}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.search_filter([checkbox_arr.s,e.target.name,elem_arr,checkbox_arr.S]))}}
                                    name="S"
                                />
                                }
                                label="S"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.M}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.search_filter([checkbox_arr.m,e.target.name,elem_arr,checkbox_arr.M]))}}
                                    name="M"
                                />
                                }
                                label="M"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.L}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.search_filter([checkbox_arr.l,e.target.name,elem_arr,checkbox_arr.L]))}}
                                    name="L"
                                />
                                }
                                label="L"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.XL}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.search_filter([checkbox_arr.xl,e.target.name,elem_arr,checkbox_arr.XL]))}}
                                    name="XL"
                                />
                                }
                                label="XL"
                            />
                    </FormControl>
                    </div>
                    <div>
                        <h1 className='mt-2'>Color Filter</h1>
                        <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.BLACK}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.color_filter([checkbox_arr.BLACK,checkbox_arr.black,elem_arr]))}}
                                    name="BLACK"
                                />
                                }
                                label="BLACK"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.WHITE}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.color_filter([checkbox_arr.WHITE,checkbox_arr.white,elem_arr]))}}
                                    name="WHITE"
                                />
                                }
                                label="WHITE"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.BLUE}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.color_filter([checkbox_arr.BLUE,checkbox_arr.blue,elem_arr]))}}
                                    name="BLUE"
                                />
                                }
                                label="BLUE"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.RED}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.color_filter([checkbox_arr.RED,checkbox_arr.red,elem_arr]))}}
                                    name="RED"
                                />
                                }
                                label="RED"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.GRAY}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.color_filter([checkbox_arr.GRAY,checkbox_arr.gray,elem_arr]))}}
                                    name="GRAY"
                                />
                                }
                                label="GRAY"
                            />
                        </FormControl>
                    </div>
                    <div>
                        <h1 className='mt-2'>Discount Filter</h1>
                        <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.ten_percent}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.discount_filter([checkbox_arr.ten_percent,e.target.name,elem_arr]))}}
                                    name="ten_percent"
                                />
                                }
                                label="10% and above"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checkbox_arr.twenty_percent}
                                    onChange={e=>{handleCheckedChange(e);dispatch(filter_actions.discount_filter([checkbox_arr.twenty_percent,e.target.name,elem_arr]))}}
                                    name="twenty_percent"
                                />
                                }
                                label="20% and above"
                            />
                    </FormControl>
                    </div>
                    <div>
                        <h1 className='mt-2'>Price Filter</h1>
                        <Slider
                            aria-label="Price marks"
                            defaultValue={0}
                            step={10}
                            valueLabelDisplay="auto"
                            marks={price_marks}
                            onChange={(e,val)=>{price_filter_function([filter_arr,val])}}
                        />

                    </div>

                </fieldset>
            </div>
            <div className='elem-container'>
            
                {/* {sizefilter && sizefilter.map((item,index) => <ProductElement key={index} item={item}/>)} */}
                {/* {elem_arr.map((item,index) => <ProductElement key={index} item={item}/>)} */}
                {/* {(filter_flag && price_flag) ? pricearr.map((item,index) => <ProductElement key={index} item={item}/>) : filter_arr.map((item,index) => <ProductElement key={index} item={item}/>)} */}

                {/* {!filter_flag && elem_arr.map((item,index) => <ProductElement key={index} item={item}/>)} */}

                {(filter_flag&&!price_flag)?filter_arr.map((item,index) => <ProductElement key={index} item={item}/>):(!filter_flag&&price_flag)?pricearr.map((item,index) => <ProductElement key={index} item={item}/>):(!filter_flag && !price_flag)?elem_arr.map((item,index) => <ProductElement key={index} item={item}/>):(filter_flag&&price_flag)?(pricearr.map((item,index) => <ProductElement key={index} item={item}/>)):null}

            </div>
        </div>
        </>
     );
    }

export default Products;