import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './forms/Registration.js';

function App() {
  const whencalled =(data) =>{
    console.log("data from registration-->"+data);
  }

  return (
    <div className="App">
      <header className="App-header">
          <Registration whenSubmitted={whencalled}/>
      </header>
    </div>
  );
}

export default App;
