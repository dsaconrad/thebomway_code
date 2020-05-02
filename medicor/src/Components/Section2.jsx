import React from "react";
import CardCarousel from "./CardCarousel";
import {Card, Image, Rating} from "semantic-ui-react";

export default class Section2 extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <CardCarousel />
                        </div>
                        <div className="col-sm-12 side-img">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/thao-59735.appspot.com/o/bos_medicor_free1.jpg?alt=media&token=62ee117f-3d3e-4ab7-9185-de55d11bd705"
                                alt="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 baby-tab">
                    <div className="row img-box">
                        <div className="col-md-6 col-sm-12">
                            <img
                                src="https://www.usenature.com/ads-2014/useNature-organic-logo.jpg"
                                alt="p1"
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZD8in5GOf-BaPFtW50yO030BJRSLZArMqQqSpR6up96LC7xgk&usqp=CAU"
                                alt="p2"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12 feature-header">
                            <h4>Featured Results</h4>
                        </div>
                        <div className="col-lg-8 col-sm-12 box-content">
                            <ul>
                                <li>Medicines</li>
                                <li>Skin Care</li>
                                <li>Vitamins & Supplements</li>
                                <li>Reflex Hammer</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row cards-container-row">
                        <div className="col-lg-3 col-sm-12 cards-container">
                            <Card>
                                <Card.Content>
                                    <Card.Meta>home</Card.Meta><br/>
                                    <Card.Header>Face Mask</Card.Header>
                                </Card.Content>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                                <div className="major-contents">
                                    <div className="contents">
                                        <div className="currency">
                                            <i className="fas fa-euro-sign"/>2.30
                                        </div>
                                        <div>
                                            <Rating
                                                maxRating={5}
                                                defaultRating={3}
                                                icon='star'
                                                size='mini'
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="bucket">
                                        <button>
                                            <i className="fas fa-shopping-basket"/>
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}