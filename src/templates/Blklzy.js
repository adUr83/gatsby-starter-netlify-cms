import React from "react";
import K from "./assets/k.svg";
import B from "./assets/b.svg";
import L from "./assets/l.svg";
import Y from "./assets/y.svg";
import Z from "./assets/z.svg";
import Pic from "./assets/pic.svg";
import Sl from "./assets/sl.svg";
import Twn from "./assets/29.svg";
import Blk from "./assets/blocket.svg";
import Doc from "./assets/doctor.svg";
import Hm from "./assets/hm.svg";
import Jern from "./assets/jern.svg";
import Pic2 from "./assets/pic2.svg";
import "./blk.css";
import v1 from "./assets/v1.svg";

import sticker from "./assets/sticker.webp";

import sticker2 from "./assets/v2.svg";
export default function Blklzy() {
    return (
        <div className="blklzy" style={{ backgroundColor: "lightblue" }}>
            <div className="columns clms">
                <div className="column b-letter fade-in">
                    <img alt="b" src={B} />
                </div>
                <div className="column l-letter fade-in-l">
                    <img alt="l" src={L} />
                </div>
                <div className="column k-letter fade-in-k ">
                    <img alt="k" src={K} />
                </div>
                <div className="column animate-bottom center-container ">
                    <span className="center-text   ">
                        Vi älskar när det känns, både när det är jobbigt och när
                        det svänger. Vi älskar våra små projekt och vi är
                        vansinnigt förtjusta i våra stora. Vi älskar det vi ännu
                        inte gjort. Ja, vi love a lot men det är så vi funkar.
                        <p className="link">
                            <br /> VÅRA TJÄNSTER {"–> "}
                        </p>
                    </span>
                </div>
                <div className="column l2-letter  fade-in-l ">
                    <img alt="l" src={L} />
                </div>
                <div className="column z-letter fade-in">
                    <img alt="z" src={Z} />
                </div>
                <div className="column y-letter fade-in-l">
                    <img alt="y" src={Y} />
                </div>
                <div className=" pic">
                    <img alt="pic" src={Pic} />
                </div>
            </div>

            <div style={{ height: "400px" }} className="columns "></div>

            <div className="columns ">
                <div className="column is-1 ">
                    <img alt="sl" className="middle-left-vector" src={v1} />
                </div>
                <div className="column center-text float-right is-5 animate-bottom middle-text">
                    BLK LZY skapar smartare tjänster, smidigare kundupplevelser,
                    vassare erbjudanden, färre silos, you name it! Rätt saker
                    vid rätt tillfälle, allt för att kunna nå högre och hålla
                    längre.
                    <br /> <br />
                    <a href="#">VÅRA TJÄNSTER {"–> "}</a>
                </div>
                <div className="column is-6">
                    <img alt="sl" className="sticker2" src={sticker2} />
                    <div className="parallax-img">
                        <img alt="sl" className="sticker" src={sticker} />
                    </div>
                </div>
            </div>

            <h2 className="brand-title">Vi är Lizzy med:</h2>

            <div className="columns ">
                <div className="column fade-in-down">
                    <div className="columns brands">
                        <div className="column is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center">
                            <img alt="sl" src={Sl} />
                            <img alt="blk" src={Blk} />
                            <img alt="hm" src={Hm} />
                        </div>
                        <div className="column is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center">
                            <img alt="jern" src={Jern} />
                            <img alt="twn" src={Twn} />
                            <img alt="doc" src={Doc} />
                        </div>
                    </div>
                </div>

                <div className="column p-b-0">
                    <img alt="pic2" className="float-right" src={Pic2} />
                </div>
            </div>
        </div>
    );
}
