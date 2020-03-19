import React from "react";

import ProgressBar from "./ProgressBar";
import SalesSection from "./SalesSection";

export default class DashBoard extends React.Component {
    render() {
        return (
            <div className="row dashboard-container">
                <div className="col-lg-2 progress-bar-container">
                    <ProgressBar />
                </div>
                <div className="col-lg-10 sales-section-container">
                    <SalesSection />
                </div>
            </div>
        )
    }
}