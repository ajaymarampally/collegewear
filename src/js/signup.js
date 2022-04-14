import React from 'react'
import '../css/main.css';
import '../css/login.css'
import { Form, Button, Card, Alert } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'

class Signup extends React.Component{
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
            <>
            <div className='signup-component'>
                <div className='signup-inside-component m-4'>
                    <h1 className='m-4'>Create an Account</h1>
                    <h2 className='m-4'>Sign up for new account</h2>
                    <a className='btn btn-primary m-4' href='/signup_comp'>
                        REGISTER
                    </a>
                </div>
            </div></>
        );
    }
}

export default Signup;