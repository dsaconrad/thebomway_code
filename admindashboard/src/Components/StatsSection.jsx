import React from "react";

import SalesHighlights from "./SalesHighlights";
import SalesCharts from "./SalesCharts";
import SalesExpenditure from "./SalesExpenditure";

export default class StatsSection extends React.Component {
    render() {
        return (
            <div className="row stat-section">
                <div className="col-sm-12 sales-highlights-container">
                    <SalesHighlights />
                </div>
                <div className="col-sm-12 sales-charts-container">
                    <SalesCharts />
                </div>
                <div className="col-sm-12 sales-expenditure-container">
                    <SalesExpenditure />
                </div>
            </div>
        );
    }
}