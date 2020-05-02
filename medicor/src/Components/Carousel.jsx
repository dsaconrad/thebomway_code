import React from "react";
import {Carousel} from "react-responsive-carousel";

export default class CarouselClass extends React.Component {
    render() {
        return (
            <Carousel showArrows={true}>
                <div>
                    <img
                        src="https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg"
                        alt="1"
                    />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR117cjsRQpIREYLMuRNgAboK1w4a2htg8PGipax5aWVYW3ue24&usqp=CAU"
                        alt="2"
                    />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img
                        src="https://cdn.dribbble.com/users/329207/screenshots/5284186/bemocs_db_dribbble_02_trail_angel.jpg"
                        alt="3"
                    />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/83d3dd19611351.562dd4e17994c.jpg"
                        alt="4"
                    />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
}