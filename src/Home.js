import './Home.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Home() {
  return (
    <div className='main-page'>
      <h1>Sign up for a Cyber party!</h1>
      <p>Here is where your journey starts.</p>
      <p>Click the button, sign up and wait for the message from us.</p>
      <Link to="/signup">
    <button className="signupButton">Sign up</button>
  </Link>

    </div>
  );
}