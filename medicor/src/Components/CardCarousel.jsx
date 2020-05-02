import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { Card, Image, Rating } from 'semantic-ui-react'

export default class CardCarousel extends React.Component {
    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "60vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }

    static get CARD_STYLE() {
        return {
            height: "50vh",
            width: "15rem",
            paddingTop: "80px",
            // paddingLeft: "2rem",
            // paddingRight: "2rem",
            textAlign: "center",
            // background: "#52C0F5",
            color: "#FFF",
            fontFamily: "sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "10px",
            boxSizing: "border-box"
        };
    }
    render() {
        return (
            <div style={CardCarousel.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div style={CardCarousel.CARD_STYLE}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Meta>home</Card.Meta><br/>
                                <Card.Header>Face Mask</Card.Header>
                            </Card.Content>
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
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div style={CardCarousel.CARD_STYLE}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Meta>home</Card.Meta><br/>
                                <Card.Header>Face Mask</Card.Header>
                            </Card.Content>
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
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div style={CardCarousel.CARD_STYLE}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Meta>home</Card.Meta><br/>
                                <Card.Header>Face Mask</Card.Header>
                            </Card.Content>
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
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </ReactCardCarousel>
            </div>
        );
    }
}