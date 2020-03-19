import React from "react";
import SalesHeader from "./SalesHeader";
import SalesByLocation from "./SalesByLocation";
import SalesByProducts from "./SalesByProducts";

export default class SalesSection extends React.Component {
    render() {
        return (
            <div className="row sales-section">
                <div className="col-sm-12 sales-header">
                    <SalesHeader />
                </div>
                <div className="col-sm-12 sales-by-location">
                    <SalesByLocation />
                </div>
                <div className="col-sm-12 sales-by-products">
                    <SalesByProducts />
                </div>
            </div>
        );
    }
}