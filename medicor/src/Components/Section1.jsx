import React from 'react';
import CarouselClass from "./Carousel";

export default class Section1 extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-3 col-sm"/>
                <div className="col-lg-9 col-sm-12 navigator-2">
                    <div className="row">
                        <div className="col-sm-12">
                            <CarouselClass />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}