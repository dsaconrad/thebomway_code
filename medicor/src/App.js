import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation";
import SearchLogoNavigation from "./Components/SearchLogoNavigation";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Footer from "./Components/Footer";

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
        <div className="row section2-row">
            <Section2 />
        </div>
        <div className="row section3-row">
            <Section3 />
        </div>
        <div className="row footer-row">
            <Footer />
        </div>
    </div>
  );
}

export default App;
