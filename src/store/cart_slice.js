import { createSlice } from "@reduxjs/toolkit";
import product_data from "../product_data";

const convert_to_int = (str) => {
    return parseInt(str.replace(/[^0-9\.]+/g, ""));
  }

const cart_slice = createSlice({
    name: "cart",
    initialState: {
        cart_items: [],
        total_price: 0,
        cart_total_quantity: 0,
        adv_data:product_data
    },
    reducers: {
        add_to_cart: (state, action) => {
            //console.log('reducer add_to_cart called');
            //the new item from the cart
            //console.log('action.payload', action.payload);
            //check if the length of the cart_items is 0
            if (state.cart_items.length === 0) {
                //set the total_price to 0
                console.log('clearing the total price in the cart items slice ')
                state.total_price = 0;
                //set the cart_total_quantity to 0
                state.cart_total_quantity = 0;
            }
            const new_item = action.payload;
            //console.log('product_quantity', new_item.quantity);
            //console.log('cart_total_add_to_cart', state.total_price);
            const price_var = convert_to_int(new_item.product_price);
            //check if the item is already in the cart
            const existing_item = state.cart_items.find(item => item.product_name === new_item.product_name);
            //if it is, increase the quantity
            if (existing_item) {
                console.log('product already in cart');
                existing_item.quantity += new_item.quantity;
                existing_item.total_price = existing_item.quantity * existing_item.product_price;
                (state.total_price)+= parseInt(price_var * new_item.quantity);
                //update cart_total_quantity
                state.cart_total_quantity += new_item.quantity;
            }
            else{
                console.log('adding product to cart_items',new_item);
                new_item.total_price = new_item.quantity * new_item.product_price;
                //add to item list in the cart
                state.cart_items.push({
                    product_name: new_item.product_name,
                    product_rating: new_item.product_rating,
                    product_review_cnt: new_item.product_review_cnt,
                    product_price: new_item.product_price,
                    product_link: new_item.product_link,
                    quantity: new_item.quantity,
                    total_price: new_item.total_price,
                });
                console.log('cart_items in cart slice',state.cart_items);
                state.total_price += parseInt(price_var * new_item.quantity);
                //update cart_total_quantity
                state.cart_total_quantity += new_item.quantity;
                //state.cart_total_quantity ++;
            }
            console.log('cart_total_after_add_to_cart', state.total_price);

        },
        remove_from_cart: (state, action) => {
            const item_to_remove = action.payload;
            let quantity_var = item_to_remove.quantity;
            //if cart_items is empty, set total_price to 0
            if (state.cart_items.length === 0) {
                console.log('cart empty after remove from cart');
                state.total_price = 0;
                state.cart_total_quantity = 0;
            }
            console.log('item to remove payload',item_to_remove);
            const existingItem = state.cart_items.find((item) => item.product_name === item_to_remove.product_name);
            //if item is found, remove it from the cart
            if (existingItem) {
                console.log('item found in cart',item_to_remove.quantity);
                //remove all existing items with the same name from the cart
                state.cart_items = state.cart_items.filter((item) => item.product_name !== item_to_remove.product_name);
                existingItem.total_price = existingItem.quantity * convert_to_int(existingItem.product_price);
                //update total price
                state.total_price -= quantity_var * convert_to_int(existingItem.product_price);
                //update cart_total_quantity
                state.cart_total_quantity -= quantity_var;
            }
            console.log('cart_total_after_remove_from_cart', state.total_price);
        },
        reset_cart: (state, action) => {
            console.log('reset cart called');
            state.cart_items = [];
            state.total_price = 0;
            state.cart_total_quantity = 0;
        }
    }
});

export const cart_actions = cart_slice.actions;
export default cart_slice;
