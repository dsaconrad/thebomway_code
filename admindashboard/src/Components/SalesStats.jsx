import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

export default class SalesStats extends React.Component {
    render() {
        return (
            <div className="row stats-container">
                <div className="col-md-3 col-sm-12 icon-1">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container col-sm-6">
                            <div>
                                <i className="fas fa-shopping-cart stat-icon icon-1 fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>Product Sales</CardTitle>
                                <CardSubtitle>1750</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 icon-2">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container col-sm-6">
                            <div>
                                <i className="fas fa-shopping-cart stat-icon icon-2 fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>Starred Products</CardTitle>
                                <CardSubtitle>30</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 icon-3">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container col-sm-6">
                            <div>
                                <i className="fas fa-shopping-cart stat-icon icon-3 fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>Starred Products</CardTitle>
                                <CardSubtitle>0</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 icon-4">
                    <div className="row icon-row">
                        <div className="col"/>
                        <Card className="icon-container col-sm-6">
                            <div>
                                <i className="fas fa-shopping-cart stat-icon icon-4 fa-3x"/>
                            </div>
                            <CardBody>
                                <CardTitle>User Comments</CardTitle>
                                <CardSubtitle>150</CardSubtitle>
                            </CardBody>
                        </Card>
                        <div className="col"/>
                    </div>
                </div>
            </div>
        );
    }
}