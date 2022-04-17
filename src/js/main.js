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

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

const source = _.times(5, () => ({
    title: "Testing Title",
    description: "Testing description",
    image: "Testing Image",
    price: "Testing Price",
  }))
  
  const initialState = {
    loading: false,
    results: [],
    value: '',
  }

function Main(){
    const navigate = useNavigate();
    const [state, dispatch] = React.useReducer(exampleReducer, initialState)
    const { loading, results, value } = state
    
    const timeoutRef = React.useRef()
    const handleSearchChange = React.useCallback((e, data) => {
      clearTimeout(timeoutRef.current)
      dispatch({ type: 'START_SEARCH', query: data.value })
  
      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: 'CLEAN_QUERY' })
          return
        }
  
        const re = new RegExp(_.escapeRegExp(data.value), 'i')
        const isMatch = (result) => re.test(result.title)
  
        dispatch({
          type: 'FINISH_SEARCH',
          results: _.filter(source, isMatch),
        })
      }, 300)
    }, [])
    React.useEffect(() => {
      return () => {
        clearTimeout(timeoutRef.current)
      }
    }, [])
    return (
      <div className="main-container">
        <nav className="navbar-main">
          <div className="navbar-container">
            <div className="navbar-brand">
              <a href="/">
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
                    loading={loading}
                    placeholder='Search...'
                    onResultSelect={(e, data) =>
                    dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                    }
                    onSearchChange={handleSearchChange}
                    results={results}
                    value={value}
                  />
                </li>
                <li>
                  <a href="/cart">
                      <img className="svg" src={cart_svg} alt="CART_ICON"/>
                  </a>
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
            <a href="/">
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
                <img src={p_d.t_shirt.u_florida.product_link} className="image-thumbnail" alt="T-Shirts"/>
                <p>{p_d.t_shirt.u_florida.product_name}</p>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.shorts.clemson})
                }>
                <img src={p_d.shorts.clemson.product_link} className="image-thumbnail" alt="clemson_short"/>
                <p>{p_d.shorts.clemson.product_name}</p>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.n_eastern_huskies})
                }>
                <img src={p_d.hoodies.n_eastern_huskies.product_link} className="image-thumbnail" alt="T-Shirts"/>
                <p>{p_d.hoodies.n_eastern_huskies.product_name}</p>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.rit})
                }>
                <img src={p_d.hoodies.rit.product_link} className="image-thumbnail" alt="T-Shirts"/>
                <p>{p_d.hoodies.rit.product_name}</p>
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
                <img src={p_d.t_shirt.boston.product_link} className="image-thumbnail" alt="T-Shirts"/>
                <p>{p_d.t_shirt.boston.product_name}</p>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.clemson})
                }>
                <img src={p_d.hoodies.clemson.product_link} className="image-thumbnail" alt="T-Shirts"/>
                <p>{p_d.hoodies.clemson.product_name}</p>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.shorts.ncsu})
                }>
                <img src={p_d.shorts.ncsu.product_link} className="image-thumbnail" alt="T-Shirts"/>
                <p>{p_d.shorts.ncsu.product_name}</p>
              </Button>
              </div>
              <div className="col-md-3 col-lg-3 col-12 col-sm-6">
              <Button className="btn"
                onClick={() =>
                  navigate('product_desc', { state: p_d.hoodies.ncsu})
                }>
                <img src={p_d.hoodies.ncsu.product_link} className="image-thumbnail" alt="T-Shirts"/>
                <p>{p_d.hoodies.ncsu.product_name}</p>
              </Button>
              </div>
            </div>
          </div>
        </section>
        <footer>
        <div className="container-fluid mt-4">
        <div className="row text-center justify-content-around p-sm-2 align-items-baseline p-md-3">
          <div className="col-md-4 col-12 col-sm-3">
            <section>
              <ul>
                <h2>MY ACCOUNT</h2>
                <li><a href="/" className="nav-link">Orders</a></li>
                <li><a href="/" className="nav-link">Returns/Refunds</a></li>
                <li><a href="/" className="nav-link">Frequently Asked Questions</a></li>
              </ul>
            </section>
          </div>
          <div className="col-md-4 col-12 col-sm-3">
            <section>
              <ul>
                <h2>CONTACT US</h2>
                <li><a href="/" className="nav-link">Customer Support</a></li>
                <li><a href="/" className="nav-link">Store Locator</a></li>
              </ul>
            </section>
            <section>
              <ul>
                <h2>ABOUT US</h2>
                <li><a href="/" className="nav-link">Official Brand Store</a></li>
                <li><a href="/" className="nav-link">About Us</a></li>
              </ul>
            </section>
          </div>
          <div className="col-md-4 col-12 col-sm-3">
            <section>
              <ul>
                <h2>SOCIAL</h2>
                <li><a href="/" className="nav-link">Facebook</a></li>
                <li><a href="/" className="nav-link">Twitter</a></li>
                <li><a href="/" className="nav-link">Youtube</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      </footer>
      </div>
    );
};

export default Main;
