import React from "react";

import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default class SalesCharts extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-7 col-sm-6 col-sm-12 line-chart-container">
                    <LineChart />
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 pie-chart-container">
                    <PieChart />
                </div>
            </div>
        );
    }
}