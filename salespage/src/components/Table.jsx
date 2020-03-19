import React from "react";

export default class Table extends React.Component {
    renderTableHeader() {
        let header = Object.keys(this.state.sales[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.sales.map((sale, index) => {
            const { id, Country, Total_Sales } = sale; //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{Country}</td>
                    <td>{Total_Sales}</td>
                </tr>
            )
        })
    }


    state = {
        sales: [
            { id: 1, Country: 'Belgium', Total_Sales: 180000 },
            { id: 2, Country: 'Germany', Total_Sales: 40000 },
            { id: 3, Country: 'India', Total_Sales: 15000 },
            { id: 4, Country: 'Sri Lanka', Total_Sales: 5000 }
        ]
    };
    render() {
        return (
            <div className="row table-container">
                <div className="col-sm-12 tabel">
                    <table id='sales'>
                        <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}