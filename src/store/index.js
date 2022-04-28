import {configureStore,combineReducers} from '@reduxjs/toolkit';
import cart_slice from './cart_slice';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import data_slice from './data_slice';
import search_slice from './search_slice';
import price_slice from './price_slice';
import filter_slice from './filter_slice';
const reducers = combineReducers({
    cart: cart_slice.reducer,
    data: data_slice.reducer,
    search: search_slice.reducer,
    price: price_slice.reducer,
    filter: filter_slice.reducer
})


const persistConfig = {
    key: 'root',
    storage
}


const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;

