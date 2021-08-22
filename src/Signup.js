import styles from './Signup.css';
import React from "react";
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Signup() {
  return (
    <div className="App background">
      <header className="App-header">
        <h1 className='message'>When you ready submit the form and wait for the message from us!</h1>
        <div className='signup-page'>
          <form>
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </form>
        </div>
      </header>
    </div>
      );
}