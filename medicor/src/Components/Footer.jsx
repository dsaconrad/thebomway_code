import React from "react";
import {Link, BrowserRouter as Router} from "react-router-dom";
import FooterLinks from "./FooterLinks";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="col-sm-12 container">
                <div className="row">
                    <div className="col-lg-3 col-sm-12 medicor-desc">
                        <img
                            src="https://demo1.leotheme.com/bos_medicor_demo/img/bos-medicor-logo-1568714014.jpg"
                            alt="medicor"
                        />
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="col-lg-2 col-sm-12 nav-options">
                        <h4>Categories</h4>
                        <ul>
                            <Router>
                                <Link to="/"><li>Medicines</li></Link>
                                <Link to="/"><li>Skin Care</li></Link>
                                <Link to="/"><li>Vitamins & Supplements</li></Link>
                                <Link to="/"><li>Reflex Hammer</li></Link>
                            </Router>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12 nav-options">
                        <h4>Account</h4>
                        <ul>
                            <Router>
                                <Link to="/"><li>Wishlist</li></Link>
                                <Link to="/"><li>Compare</li></Link>
                                <Link to="/"><li>Subscribe</li></Link>
                                <Link to="/"><li>Login</li></Link>
                            </Router>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12 nav-options">
                        <h4>Quick Links</h4>
                        <ul>
                            <Router>
                                <Link to="/"><li>Shipping & Returns</li></Link>
                                <Link to="/"><li>Privacy Policy</li></Link>
                                <Link to="/"><li>Terms & Conditions</li></Link>
                                <Link to="/"><li>Vacancies</li></Link>
                            </Router>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-12 promotions">
                        <h4>Promotions</h4>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/thao-59735.appspot.com/o/bos_medicor%2Fbanner3-h3.png?alt=media&token=b153dcbf-02d4-41c1-8714-c75a39405203"
                            alt="promotions"
                        />
                    </div>
                </div>
                <hr/>
                <FooterLinks />
            </div>
        );
    }
}