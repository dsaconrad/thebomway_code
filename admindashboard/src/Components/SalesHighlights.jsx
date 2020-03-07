import React from "react";

import PickDate from "./DatePicker";
import SalesStats from "./SalesStats";

export default class SalesHighlights extends React.Component {
    render() {
        return (
            <div className="row sales-highlights">
                <div className="col-sm-12">
                    <PickDate />
                </div>
                <div className="col-sm-12">
                    <SalesStats />
                </div>
            </div>
        );
    }
}