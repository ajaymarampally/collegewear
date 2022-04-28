import { createSlice } from "@reduxjs/toolkit";
import product_data from '../product_data'

const convert_to_int = (str) => {
    return parseInt(str.replace(/[^0-9\.]+/g, ""));
  }

const price_slice = createSlice({
    name: "price",
    initialState: {
        price_range: [],
        price_data:product_data,
        price_filter_items:[]
    },
    reducers: {
        set_price_range: (state, action) => {
            console.log('payload in set_price_range',action.payload);                
            state.price_range = action.payload;
        },
        set_price_filter_items: (state, action) => {
            console.log('payload in set_price_filter_items',action.payload);
            product_data.map(elem => Object.values(elem).forEach(element => {
                console.log('element_price',convert_to_int(element.product_price));
                //if the product_price is in the range of the price_range then add it to the price_filter_items
                if(action.payload[0]>=convert_to_int(element.product_price) && action.payload[1]<=convert_to_int(element.product_price))
                {
                    console.log('adding element to price_filter_items',elem);
                    state.price_filter_items.push(elem);
                }
                console.log('setting_price_filter_items',state.price_filter_items);
            })
            );
        }
    }
});

export const price_actions = price_slice.actions;
export default price_slice;