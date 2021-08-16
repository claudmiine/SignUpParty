import './Home.css';
import React from "react";
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Home() {
  return (
    <div>
          <h1>Sign up for a Cyber party!</h1>
   
    <div className='main-page'>
        <p>Here is where your journey starts.</p>
        <p>Click the button, sign up and wait for the message from us.</p>
        <Link to="/signup">
          <Button variant="contained">Sign Up now!</Button>
        </Link>
    </div>
    </div>
     
    
  );
}