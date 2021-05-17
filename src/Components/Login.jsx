import React from "react";
import {Form} from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './Login.css'
import Navbar from "./Navbar";

function Login(){
return (
  <div>
  <Navbar />
    <div className="logincss">
    
    <Form>
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" size="lg" >
        Submit
    </Button>
  </Form>
  </div>
  </div> 
);
};

export default Login;