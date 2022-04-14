import React from "react";
import '../css/main.css';
import _ from 'lodash'
import project_logo from '../img/University_of_Illinois_at_Chicago_circle_logo.svg';
import cart_svg from '../img/shopping-cart.svg';
import user_svg from '../img/username.svg';
import { Search } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

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

function Header(){

    const navigate = useNavigate();

    const props = {
        men_drop_down_id: '0',
        women_drop_down_id: '0'
    }
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
    return(
        <div className="container-fluid">
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
                    <Dropdown.Item text='T-Shirts'/>
                    <Dropdown.Item text='Hoodies' />
                    <Dropdown.Item text='Jeans' />
                  </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                <Dropdown text='WOMEN'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='T-Shirts' />
                    <Dropdown.Item text='Hoodies' />
                    <Dropdown.Item text='Jeans' />
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
        </div>
    );

};

export default Header;

