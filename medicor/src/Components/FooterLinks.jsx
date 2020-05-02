import React from "react";
import {Link, BrowserRouter as Router} from "react-router-dom";

export default class FooterLinks extends React.Component {
    render() {
        return (
            <div className="row footer-links">
                <div className="col-lg-2 col-sm-12 icons">
                    <i className="fab fa-facebook-f"/>
                    <i className="fab fa-twitter"/>
                    <i className="fab fa-youtube"/>
                    <i className="fab fa-instagram"/>
                    <i className="fab fa-pinterest"/>
                </div>
                <div className="col-lg-10 col-sm-12 footer-links-options">
                    <ul>
                       <Router>
                           <li><Link>About Us</Link></li>
                           <li><Link>Customer Service</Link></li>
                           <li><Link>Privacy Policy</Link></li>
                           <li><Link>Site Map</Link></li>
                           <li><Link>Advanced Search</Link></li>
                           <li><Link>Orders and Returns</Link></li>
                           <li><Link>Contact Us</Link></li>
                       </Router>
                    </ul>
                </div>
            </div>
        );
    }
}