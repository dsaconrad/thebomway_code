import React from 'react';
import './App.css';

import Logo from './Components/Logo';
import Credentials from "./Components/LoginCredentials";

function App() {
  return (
      <div className="App">
          <div className="form-container container-fluid">
              <Logo /><br/>
              <Credentials />
          </div>
      </div>
  );
}

export default App;
