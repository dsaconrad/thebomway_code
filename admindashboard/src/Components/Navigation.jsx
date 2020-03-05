import React from "react";

import Logo from '../images/logo.png';
import NavigationSearchBar from "./NavigationSearchBar";
import NotificationHandler from "./NotificationHandler";
import UserNavigations from "./UserNavigations";

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="row navigation-container">
                <div className="col-lg-3 image-container">
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
                <div className="col-lg-3 user-navigation-container">
                    <UserNavigations />
                </div>
            </div>
        )
    }
}