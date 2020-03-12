import React from "react";

import Stats from "./Stats";

export default class SalesExpenditure extends React.Component {
    render() {
        return (
            <div className="row sales-expenditure">
                <div className="col-sm-12">
                    <Stats />
                </div>
            </div>
        );
    }
}