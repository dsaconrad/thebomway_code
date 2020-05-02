import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation";
import SearchLogoNavigation from "./Components/SearchLogoNavigation";
import Section1 from "./Components/Section1";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row navigation-row">
        <Navigation />
      </div>
        <div className="row search-logo-navigation-row">
            <SearchLogoNavigation />
        </div>
        <div className="row section1-row">
            <Section1 />
        </div>
    </div>
  );
}

export default App;
