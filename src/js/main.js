import React from "react";
import _ from 'lodash'
import '../css/main.css';
import project_logo from '../img/University_of_Illinois_at_Chicago_circle_logo.svg';
import cart_svg from '../img/shopping-cart.svg';
import user_svg from '../img/username.svg';
import { Search } from 'semantic-ui-react'
import img1 from '../img/img1.webp';
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import p_d from  '../product_data.json';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import product_data from '../product_data'
import { useSelector,useDispatch } from 'react-redux';
import {filter_actions} from '../store/filter_slice';
import Rating from '@mui/material/Rating';

function Main(){
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [search_results, setSearch_results] = React.useState([]);
    const source = product_data;
    const dispatch = useDispatch();
    const [search_send_array, setSearch_send_array] = React.useState([]);
    const cart_span_quantity = useSelector(state => state.cart.cart_total_quantity);
    console.log('cart quantity in header section main page ',cart_span_quantity)
  
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
    console.log('result section -> navigate to product_page', result.props);
    navigate('/product_desc', {state:result.props});

  } 

  const navigate_to_adv_page = () => {
    navigate('/products', {state:product_data[0]});
    console.log('navigate to adv page with 36 items rendered')
    //send a dispatch to set adv flag true
    dispatch(filter_actions.set_ten_percent_discount());
  }

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

    return (
      <div className="main-container">
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
                  navigate('products', { state: p_d.t_shirt})
                } text='T-Shirts'/>
                    <Dropdown.Item onClick={() =>
                  navigate('products', { state: p_d.hoodies})
                } text='Hoodies'/>
                    <Dropdown.Item onClick={() =>
                  navigate('products', { state: p_d.shorts})
                } text='Shorts'/>
                  </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                <Dropdown text='WOMEN'>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() =>
                  navigate('products', { state: p_d.t_shirt})
                } text='T-Shirts'/>
                    <Dropdown.Item onClick={() =>
                  navigate('products', { state: p_d.hoodies})
                } text='Hoodies'/>
                    <Dropdown.Item onClick={() =>
                  navigate('products', { state: p_d.shorts})
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
                </li>
                <li>
                <li>  
                      <img className="svg" onClick={()=>navigate('/cart')} src={cart_svg} alt="CART_ICON"/>
                      <span className="cart-quantity">{cart_span_quantity}</span>
                </li>
                </li>
                <li>
                    <a href="/login">
                      <img className="svg" src={user_svg} alt="USER_ICON"/> 
                    </a>
                 </li>
            </ul>
          </div>
        </nav>
        <section>
          <div className="adv">
            <a onClick={()=>navigate_to_adv_page()}>
              <img className="adv-img" src={img1} alt="ADV_IMAGE" />
            </a>
          </div>
        </section>
        <section id="deals_of_the_day_span">
          <div className="d-flex m-0 mt-2 cap">
              <span id="frst">Deals of the day</span>
          </div>
        </section>
        <section id="deals_of_the_day">
          <div className="container-fluid">
          <div className="row justify-content-around m-0 mt-2 fourcol text-center align-items-baseline">
              <div className="col-md-3 col-12 col-sm-6">
                <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.t_shirt.u_florida})
                }>
                <div className="row">
                    <div className="col-sm-6">
                      <img src={p_d.t_shirt.u_florida.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product">{p_d.t_shirt.u_florida.product_name}</p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.t_shirt.u_florida.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.t_shirt.u_florida.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>
                </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.shorts.clemson})
                }>
                <div className="row">
                    <div className="col-sm-6">
                      <img src={p_d.shorts.clemson.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product"><p>{p_d.shorts.clemson.product_name}</p></p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.shorts.clemson.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.shorts.clemson.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.n_eastern_huskies})
                }>
                <div className="row">
                    <div className="col-sm-6">
                    <img src={p_d.hoodies.n_eastern_huskies.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product"><p>{p_d.hoodies.n_eastern_huskies.product_name}</p></p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.hoodies.n_eastern_huskies.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.hoodies.n_eastern_huskies.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.rit})
                }>
                <div className="row">
                    <div className="col-sm-6">
                    <img src={p_d.hoodies.rit.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product"><p>{p_d.hoodies.rit.product_name}</p></p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.hoodies.rit.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.hoodies.rit.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>
              </Button> 
              </div>
          </div>
          </div>
        </section>
        <section id="most_popular_span">
        <div className="d-flex m-0 mt-2 cap">
              <span id="frst">Most Popular</span>
          </div>
        </section>
        <section id="most_popular_items">
        <div className="container-fluid">
          <div className="row justify-content-around m-0 mt-2 fourcol text-center align-items-baseline">
              <div className="col-md-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.t_shirt.boston})
                }>
                <div className="row">
                    <div className="col-sm-6">
                    <img src={p_d.t_shirt.boston.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product"><p>{p_d.t_shirt.boston.product_name}</p></p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.t_shirt.boston.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.t_shirt.boston.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>                 
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.clemson})
                }>
               <div className="row">
                    <div className="col-sm-6">
                    <img src={p_d.hoodies.clemson.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product"><p>{p_d.hoodies.clemson.product_name}</p></p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.hoodies.clemson.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.hoodies.clemson.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>                                
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.shorts.ncsu})
                }>
               <div className="row">
                    <div className="col-sm-6">
                    <img src={p_d.shorts.ncsu.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product"><p>{p_d.shorts.ncsu.product_name}</p></p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.shorts.ncsu.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.shorts.ncsu.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>                                
              
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.ncsu})
                }>
               <div className="row">
                    <div className="col-sm-6">
                    <img src={p_d.hoodies.ncsu.product_link} className="image-thumbnail" alt="T-Shirts"/>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <p className="main-p-product"><p>{p_d.hoodies.ncsu.product_name}</p></p>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Rating name="half-rating-read" defaultValue={parseInt(p_d.hoodies.ncsu.product_rating)} precision={0.5} readOnly />
                        </div>
                        <div className="col-sm-6">
                          <p>{p_d.hoodies.ncsu.product_price}</p>
                        </div>
                      </div>
                    </div>
                </div>                                
              </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Main;
