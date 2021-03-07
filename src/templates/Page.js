import React, { Component } from "react";
import Slider from "react-slick";

import Image1 from "./assets/1.webp";
import Image2 from "./assets/2.webp";
import Image3 from "./assets/3.webp";
import Image4 from "./assets/4.webp";
import Image5 from "./assets/5.webp";
import Image6 from "./assets/6.webp";
import Image7 from "./assets/7.webp";
import Image8 from "./assets/8.webp";
import Image9 from "./assets/9.webp";
import Image10 from "./assets/10.webp";
import Image11 from "./assets/11.webp";
import Image12 from "./assets/12.webp";

export default class MultipleRows extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 2,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="image-box">
                        <img src={Image1} />
                    </div>
                    <div className="image-box">
                        <img src={Image2} />
                    </div>
                    <div className="image-box">
                        <img src={Image3} />
                    </div>
                    <div className="image-box">
                        <img src={Image4} />
                    </div>
                    <div className="image-box">
                        <img src={Image5} />
                    </div>
                    <div className="image-box">
                        <img src={Image6} />
                    </div>
                    <div className="image-box">
                        <img src={Image7} />
                    </div>
                    <div className="image-box">
                        <img src={Image8} />
                    </div>
                    <div className="image-box">
                        <img src={Image9} />
                    </div>
                    <div className="image-box">
                        <img src={Image10} />
                    </div>
                    <div className="image-box">
                        <img src={Image11} />
                    </div>
                    <div className="image-box">
                        <img src={Image12} />
                    </div>
                </Slider>
            </div>
        );
    }
}
