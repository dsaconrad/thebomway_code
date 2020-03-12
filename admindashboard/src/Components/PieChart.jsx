import React from "react";

import { Pie } from "react-chartjs-2";

export default class LineChart extends React.Component {

    state = {
        chartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    data: [12345, 89746, 56783, 57642, 36944, 24612, 21200],
                    backgroundColor: ['yellow', 'cyan', 'darkgreen', 'darkblue', 'darkorange', 'darkred', 'gray' ]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Sales Overview',
                fontSize: 25,
                position: 'bottom'
            },
            legend: {
                display: false,
                position: 'bottom'
            },
            responsive: true
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <Pie
                        data={this.state.chartData}
                        options={this.state.options}
                    />
                </div>
            </div>
        )
    }
}