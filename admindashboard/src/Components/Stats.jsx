import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

export default class SalesStats extends React.Component {
    render() {
        return (
            <div className="row stats-container">
                <div className="col-md-3 col-sm-12 ">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container1 col-sm-6">
                            <div>
                                <i className="fas fa-shopping-cart stat-icon fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>Product Sales</CardTitle>
                                <CardSubtitle>1750</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 ">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container2 col-sm-6">
                            <div>
                                <i className="fas fa-star stat-icon fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>Product Sales</CardTitle>
                                <CardSubtitle>1750</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 ">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container3 col-sm-6">
                            <div>
                                <i className="fas fa-meh-blank stat-icon fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>Product Sales</CardTitle>
                                <CardSubtitle>1750</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 ">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container4 col-sm-6">
                            <div>
                                <i className="fas fa-comments stat-icon fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>Product Sales</CardTitle>
                                <CardSubtitle>1750</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
            </div>
        );
    }
}