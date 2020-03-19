import React from "react";
import DatePicker from "./PickDate";

export default class SalesHeader extends React.Component {
    render() {
        return (
            <div className="row header">
                <div className="col-md-6 col-sm-12 text">
                    <h1>SALES</h1>
                </div>
                <div className="col-md-6 col-sm-12 date-picker">
                    <DatePicker />
                </div>
            </div>
        );
    }
}