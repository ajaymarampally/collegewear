import React from 'react'
import '../css/main.css';
import '../css/login.css'
import { Form, Button, Card, Alert } from "react-bootstrap"


class Signup_component extends React.Component{
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
            </div>
            <div className='signup-component'>
                <div className='signup-inside-component'>
                    <h1>Create an Account</h1>
                </div>
            </div></>
        );
    }
}

export default Signup_component;