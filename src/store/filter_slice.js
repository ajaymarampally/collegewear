import { ConstructionOutlined } from '@mui/icons-material';
import {createSlice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


const convert_to_int = (value) => {
    //remove first character , then convert string to int
    return parseInt(value.substring(1));
}

const convert_to_discount = (value) => {
    //remove the last character , then convert string to int
    return parseInt(value.substring(0, value.length - 1));
}

const filter_slice = createSlice({
    name: 'filter',
    initialState: {
        filter_arr: [],
        filter_flag: false,
        price_flag: false,
        product_data: [],
        adv_flag: false,
        size_select_flag:false,
        price_arr: [],
    },
    reducers: {
        set_filter_arr: (state, action) => {
            console.log('set_filter_arr');
            state.filter_arr = action.payload;
        },

        
        search_filter: (state, action) => {
            state.filter_flag = true
            console.log('elem_arr in search_filter',action.payload[0])
            state.filter_arr.map(element=>{
                if(element.product_available_sizes.includes(action.payload[0])){
                    console.log('blah')
                }
                else{
                    console.log('pop element')
                    state.filter_arr.pop(element);
                }
            })
            
        },
        price_filter: (state, action) => {
            state.filter_flag = true
            state.price_flag = true
            state.product_data = action.payload[1]
            const temp_arr = []
            console.log('price filter',action.payload);
            state.filter_arr.map(element=>{
                console.log('element price',convert_to_int(element.product_price),element.product_price,action.payload[0])
                if(convert_to_int(element.product_price)>(action.payload[0])){
                    console.log('blah')
                }
                else{
                    console.log('add element to price_arr',element)
                    //push element to price_arr
                    temp_arr.push(element)
                }
            })
            return temp_arr;
            
        },
        color_filter: (state, action) => {
            state.filter_flag = true
            //console.log('elem_arr in color_filter',action.payload[1])
            state.filter_arr.map(element=>{
                //console.log('element color',element.product_color,action.payload[1])
                if(element.product_color.includes(action.payload[1])){
                    //do nothing
                }
                else{
                    console.log('no match pop element')
                    state.filter_arr.pop(element);
                }
            })
        },
        discount_filter: (state, action) => {
            state.filter_flag = true
            let discount_value = 0
            action.payload[1]=='ten_percent'?discount_value=10:discount_value=20
            state.filter_arr.map(element=>{
                console.log('payload discount,discount_props',convert_to_discount(element.product_discount_percentage),discount_value)
                if(convert_to_discount(element.product_discount_percentage)<=discount_value){
                    //do nothing
                    console.log('pop element')
                    state.filter_arr.pop(element);
                }
                else{
                    //console.log('no match pop element')
                    //state.filter_arr.pop(element);
                }
            })
        },

        set_ten_percent_discount: (state, action) => {
            state.filter_flag = true
            state.adv_flag = true
            //filter products with discount above 10%
            state.filter_arr.map(element=>{
                if(convert_to_discount(element.product_discount_percentage)>=20){
                    console.log('pop element')
                    state.filter_arr.pop(element);
                }
            }
            )
        },
        clear_filter: (state, action) => {
            state.filter_arr = action.payload;
        },
        set_filter_flag: (state, action) => {
            state.filter_flag = true;
        },
        set_price_flag: (state, action) => {
            state.price_flag = true;
        },
        reset_filter_flags: (state, action) => {
            state.filter_flag = false;
            state.price_flag = false;
        },
        set_size_select_flag: (state, action) => {
            state.size_select_flag = !state.size_select_flag;
        }
    }
});

export const filter_actions = filter_slice.actions;
export default filter_slice;

