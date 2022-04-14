import React from 'react'
import '../css/main.css';
import '../css/login.css'
import Header from '../js/header';
import Login_Comp from './login_comp';
import Signup from './signup';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            loading: false,
        }
    }
    render(){
        return(
            <><div>
                <Header />
            </div>
            <div className='login-component'>
                <Login_Comp />
                <div className='border-right'></div>
                <Signup />
            </div></>
        );
    }
}

export default Login;
