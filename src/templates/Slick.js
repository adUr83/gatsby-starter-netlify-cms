import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./oml.css";
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
import Image13 from "./assets/13.webp";

export default function Slick() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        rows: 2,
        slidesPerRow: 2,

        responsive: [
            {
                breakpoint: 1200,
                settings: {},
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div>
            <Slider className="slick" {...settings}>
                <div>
                    <img src={Image1} />
                </div>
                <div>
                    <img src={Image2} />
                </div>
                <div>
                    <img src={Image3} />
                </div>
                <div>
                    <img src={Image4} />
                </div>
                <div>
                    <img src={Image5} />
                </div>
                <div>
                    <img src={Image6} />
                </div>
                <div>
                    <img src={Image7} />
                </div>
                <div>
                    <img src={Image8} />
                </div>
                <div>
                    <img src={Image9} />
                </div>
                <div>
                    <img src={Image10} />
                </div>
                <div>
                    <img src={Image11} />
                </div>
                <div>
                    <img src={Image12} />
                </div>
                <div>
                    <img src={Image13} />
                </div>
            </Slider>
        </div>
    );
}
