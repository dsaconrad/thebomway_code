import React from "react";
import Maps from "./Maps";
import Table from "./Table";

export default class MapView extends React.Component {
    render() {
        return (
            <div className="row map-view">
                <div className="col-lg-6 col-md-12 map">
                    <Maps />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5 col-md-12 table-view">
                    <Table />
                </div>
            </div>
        );
    }
}