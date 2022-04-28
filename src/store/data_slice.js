import {createSlice} from '@reduxjs/toolkit';

const data_slice = createSlice({
    name: 'data',
    initialState: {
        order_date:'2022-02-22',
        order_no:'7737297683167',
        shipping_address:'224 Main St, Chicago , 60612',
        credit_card_no:'XXXX-XXXX-XXXX-3456',
        card_holder_name:'John Doe',
        items_sub_total:0,
        shipping_cost:0,
        total_before_tax:0,
        estimated_tax:0,
        grand_total:0,
        price_arr:[]
    },
    reducers: {
        set_order_date: (state, action) => {
            state.order_date = action.payload;
        },
        set_cart_details : (state, action) => {
            state.items_sub_total = action.payload.items_sub_total;
            state.shipping_cost = Math.round(state.items_sub_total * 0.2);
            state.total_before_tax = state.items_sub_total + state.shipping_cost;
            state.estimated_tax = Math.round(state.total_before_tax * 0.08);
            state.grand_total = state.total_before_tax + state.estimated_tax;
        },
        set_size_select_flag : (state, action) => {
            state.size_select_flag = true;
        }
    }
});


export const data_actions = data_slice.actions;
export default data_slice;
