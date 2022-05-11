/* eslint-disable array-callback-return */
import React from "react";
import '../css/main.css';
import _ from 'lodash'
import project_logo from '../img/University_of_Illinois_at_Chicago_circle_logo.svg';
import cart_svg from '../img/shopping-cart.svg';
import user_svg from '../img/username.svg';
import { Search } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import p_d from  '../product_data.json';
import product_data from '../product_data'
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { search_actions } from "../store/search_slice";
import { filter_actions } from "../store/filter_slice";

import {Router} from '../App'

  
function Header(){
    const source = product_data;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [search_results, setSearch_results] = React.useState([]);
    const cart_span_quantity = useSelector(state => state.cart.cart_total_quantity);
    const [search_send_array, setSearch_send_array] = React.useState([]);
    console.log('cart quantity in header section ',cart_span_quantity)


    const handle_enter_function = (e) => {
        if(e.key === 'Enter'){  
            console.log('enter key pressed')
            console.log('search results',search_results)
            search_results.map(item => {
              console.log(item.props)
              //add item to the search_send_array
              search_send_array.push(item.props)
            })
            console.log('navigating to search_send_array',search_send_array)
            navigate('products', { state: search_send_array })
        }
    }


    //function to handle search
    const search_function = (e) => {
        setIsLoading(true);
        setSearch_results([]);
        setSearchTerm(e.target.value);
        console.log('search term: ', e.target.value);
        setTimeout(() => {
          // eslint-disable-next-line no-lone-blocks
          {source.map((source)=>{
            if(searchTerm===''){
              setSearch_results([]);
              setSearch_send_array([]);
            }
            //create a temp array to store the filtered data
            let search_t = []
            Object.values(source).forEach(element => {                       
              if(element.product_name.toLowerCase().includes(searchTerm.toLowerCase())){
                console.log('match',element)
                search_t.push({title:element.product_name,description:[element.product_price],props:element})}
            })
            setSearch_results(search_t);
            setIsLoading(false);
            console.log('search result',search_results)
        }, 1000)}})}

    //function to handle search selection
    function result_function(e, { result }) {
    //Router.replace('/products', { state: result.props })
    navigate('/products', {state:result.props});

  }
    
    //let search_results = useSelector(state => state.search.search_items.search_items);
    return(
        <div className="container-fluid">
        <nav className="navbar-main">
          <div className="navbar-container">
            <div className="navbar-brand">
              <a onClick={()=>navigate('/')}>
                <img src={project_logo} alt="PROJECT_LOGO"/>  
              </a>
            </div>
            <ul className="navbar-nav-left">
                <li>
                <Dropdown text='MEN'>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() =>
                 {navigate('products', { state: p_d.t_shirt});dispatch(filter_actions.reset_filter_flags())} 
                } text='T-Shirts'/>
                    <Dropdown.Item onClick={() =>
                {navigate('products', { state: p_d.hoodies});dispatch(filter_actions.reset_filter_flags())}
                } text='Hoodies'/>
                    <Dropdown.Item onClick={() =>
                  {navigate('products', { state: p_d.shorts});dispatch(filter_actions.reset_filter_flags())} 
                } text='Shorts'/>
                  </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                <Dropdown text='WOMEN'>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() =>
                  {navigate('products', { state: p_d.t_shirt});dispatch(filter_actions.reset_filter_flags())} 
                } text='T-Shirts'/>
                    <Dropdown.Item onClick={() =>
                {navigate('products', { state: p_d.hoodies});dispatch(filter_actions.reset_filter_flags())} 
                } text='Hoodies'/>
                    <Dropdown.Item onClick={() =>
                  {navigate('products', { state: p_d.shorts});dispatch(filter_actions.reset_filter_flags())} 
                } text='Shorts'/>
                  </Dropdown.Menu>
                </Dropdown>                                    
                </li>
            </ul>
            <ul className="navbar-nav-right">
                <li>
                <Search
                  input={{ icon: 'search' }}
                  onKeyDown={handle_enter_function}
                  placeholder='Search...'
                  noResultsMessage='No results found'
                  loading={isLoading}
                  onResultSelect={result_function}
                  onSearchChange={search_function}
                  results={search_results}
                  value={searchTerm}
                />
                {()=>handle_enter_function()}
                </li>
                
                <li>
                  <img className="svg" onClick={()=>navigate('/cart')} src={cart_svg} alt="CART_ICON"/>
                  <span className="cart-quantity">{cart_span_quantity}</span>
                </li>
                <li>
                   <a href="/login">
                      <img className="svg" src={user_svg} alt="USER_ICON"/> 
                    </a> 
                </li>
            </ul>
          </div>
        </nav>
        </div>
    );

};

export default Header;

