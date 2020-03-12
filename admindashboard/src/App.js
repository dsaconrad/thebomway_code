import React from 'react';
import './App.css';


import Navigation from "./Components/Navigation";
import DashBoard from "./Components/DashBoard";

function App() {
    return (
        <div className="App container-fluid">
            <Navigation />
            <DashBoard />
        </div>
    );
}

export default App;
