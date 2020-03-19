import React from "react";
import MapView from "./MapView";

export default class SalesByLocation extends React.Component {
    render() {
        return (
            <div className="row location">
                <div className="col-sm-12 head">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 locationtext">
                            <h3>Sales By Location</h3>
                        </div>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-sm-12 map-view-container">
                    <MapView />
                </div>
            </div>
        );
    }
}