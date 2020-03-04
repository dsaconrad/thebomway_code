import React from "react";

import Logo from '../images/logo.png';
import NavigationSearchBar from "./NavigationSearchBar";
import NotificationHandler from "./NotificationHandler";

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="row navigation-container">
                <div className="col-lg-3">
                    <img className="logoImage"
                         src={Logo}
                         alt="The BOMWAY"/>
                </div>
                <div className="col-lg-4">
                    <NavigationSearchBar />
                </div>
                <div className="col-lg-2 notification-container">
                    <NotificationHandler />
                </div>
                <div className="col-lg-3"><p>3</p></div>
            </div>
        )
    }
}