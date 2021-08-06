import './App.css';
import React from 'react'; 
import { Form } from './Form'
import MainPage from './MainPage';

function App() {
  return (
    <div className="App background">
      <header className="App-header">
        <MainPage/>
        <Form />
      </header>
    </div>
  );
}

export default App;
