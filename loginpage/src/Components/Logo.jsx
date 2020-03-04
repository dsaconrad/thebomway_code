import React from "react";

import LogoImage from '../images/logo.png';


function Logo() {
    return (
        <div className="row">
            <div className="col"/>
            <div className="col-sm-5">
                <img className="logoImage" src={LogoImage} alt="logo"/>
            </div>
            <div className="col"/>
        </div>
    )
}

export default Logo;