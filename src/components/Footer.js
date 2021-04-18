import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer footer-bg has-text-white-ter">
                <div className="content  footer-bg has-text-white-ter">
                    <div className="container-fluid has-text-left  footer-bg footer-grid  has-text-white-ter">
                        {" "}
                        <div className="footer-item">SITEMAP</div>
                        <div>
                            {" "}
                            <a className="footer-item"> Vad vi gör</a>
                            <br />
                            <a className="footer-item"> Om BLK LZY</a> <br />
                            <a className="footer-item"> Kontakt</a>
                        </div>
                        <div></div>
                        <div className="footer-item">SOCIALA KANALER</div>
                        <div className="footer-items">
                            <br /> LinkedIn
                        </div>
                        <div className="footer-items">BESÖK OSS</div>
                        <div className="footer-items">
                            Stockholm <br /> Torsgatan 4<br /> 111 23 Stockholm{" "}
                            <br />
                            <u> HITTA HIT –> </u>
                        </div>
                        <div></div>
                        <div className="footer-items">SNACKA SÄLJ</div>
                        <div className="footer-items">
                            <br />
                            +46 10 207 46 40 <br /> hello@blacklizzy.se
                        </div>
                        <div></div>
                        <div className="footer-item">COOKIES</div>
                        <div className="footer-item">Cookie Policy</div>
                        <div></div>
                        <div className="footer-items">
                            Malmö <br /> Nordenskiöldsgatan 24 <br />
                            211 19 Malmö <br />
                            <u> HITTA HIT –></u>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;
