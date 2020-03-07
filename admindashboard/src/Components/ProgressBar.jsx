import React from "react";

export default class ProgressBar extends React.Component {
    render() {
        return (
            <div className="row progressBar">
                <div className="col-sm-2 progressBar-icons">
                    <i className="fa fa-tachometer-alt progress-bar-icon fa-2x" />
                    <i className="fa fa-cog progress-bar-icon" />
                </div>
                <div className="col-sm-10">
                    <p>progressBar</p>
                </div>
            </div>
        );
    }
}