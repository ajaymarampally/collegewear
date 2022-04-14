import React from 'react'
import '../css/main.css';
import '../css/login.css'
import { Form, Button, Card, Alert } from "react-bootstrap"
import Header from '../js/header';


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
                <Header />
            </div>
            <div className='signup-page-component'>
                <div className='create-component'>
                <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">CREATE AN ACCOUNT</h2>
          <Form className="login-form">
            <Form.Group className="mb-4" id="email">
              <Form.Label><h2>Email Address *</h2></Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-4" id="email">
              <Form.Label><h2>Full Name</h2></Form.Label>
              <Form.Control type="name" required />
            </Form.Group>
            <Form.Group className="mb-4" id="email">
              <Form.Label><h2>Choose Password</h2></Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group className="mb-4" id="password">
              <Form.Label><h2>Password</h2></Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <a href='/login'>
              <Button className="w-100 login-btn mt-4" type="submit">
                SIGN UP
              </Button>
            </a>
          </Form>
        </Card.Body>
      </Card>   
                </div>
                <div className='border-right' ></div>
                <div className='redirect-comp'>
                <div className='signup-component'>
                <div className='signup-inside-component m-4'>
                    <h1 className='m-4'>Log In</h1>
                    <h2 className='m-4'>If you already have an account, log in here</h2>
                    <a className='btn btn-primary m-4' href='/login'>
                        LOG IN
                    </a>
                </div>
            </div>
                </div>
            </div></>    
        );
    }
}

export default Signup_component;