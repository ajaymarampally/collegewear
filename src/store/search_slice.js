import { createSlice } from "@reduxjs/toolkit";
import product_data from '../product_data'



const search_slice = createSlice({
    name: "search",
    initialState: {
        search_items: [],
        search_data:product_data,
    },
    reducers: {
        set_search_items: (state, action) => {
            console.log('payload in set_search_items',action.payload);
            state.search_items = action.payload;
        },
        clear_search_items: (state, action) => {
            console.log('clear search items');
            //if lenght of search items is greater than 0, then clear the search items
            if(state.search_items.length>0)
            {
                state.search_items = [];
            }
        }

    }
});

export const search_actions = search_slice.actions;
export default search_slice;

