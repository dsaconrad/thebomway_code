import React from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';

export default class DatePicker extends React.Component {
    render() {
        return (
            <div className=" row date-picker">
                <div className="col"/>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <DateRangePicker startDate="1/1/2014" endDate="3/1/2014">
                        <button className="date-button">Select Dates</button>
                    </DateRangePicker>
                </div>
            </div>
        );
    }
}