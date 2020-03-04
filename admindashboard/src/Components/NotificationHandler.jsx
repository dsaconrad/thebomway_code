import React from "react";

export default class NotificationHandler extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <i className="fa fa-envelope icon fa-2x" />
                </div>
                <div className="col-sm-4">
                    <i className="fa fa-bell icon fa-2x" />
                </div>
                <div className="col-sm-4">
                    <i className="fa fa-flag icon fa-2x" />
                </div>
            </div>
        );
    }
}