import React from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import SalesDashboard from "./components/SalesDashboard";

function App() {
  return (
    <div className="App container-fluid">
        <Navigation />
        <SalesDashboard />
    </div>
  );
}

export default App;
