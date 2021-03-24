import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import "./Navbar.css";
const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: "",
        };
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: "is-active",
                      })
                    : this.setState({
                          navBarActiveClass: "",
                      });
            }
        );
    };

    render() {
        return (
            <nav
                className="navbar navbar-color"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container nav-2">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" title="Logo">
                            <svg
                                preserveAspectRatio="xMidYMid meet"
                                data-bbox="0 0 780.3 340.2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 780.3 340.2"
                                height="40"
                                width="40"
                                data-type="shape"
                                role="img"
                                aria-labelledby="svgcid--cojmeir5fz3"
                            >
                                <title id="svgcid--cojmeir5fz3"></title>
                                <g>
                                    <path d="M340.2 0v340.2H0V0h340.2z"></path>
                                    <path d="M780.2 193.1v-45.9H553.1L780.3 46.1l-.1-.2V0h-340v46.1h227.2L440.2 147.2v46h227.1L440.2 294.3v45.9h340v-45.9H553.1l227.2-101.1-.1-.1z"></path>
                                </g>
                            </svg>
                            {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
                        </Link>
                        {/* Hamburger menu */}
                        {/* <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div> */}
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-start is-flex is-justify-content-flex-start  ">
                            {/* <Link className="navbar-item" to="/about">
                About
              </Link> */}

                            <Link className="navbar-item text-1" to="/blog">
                                VAD VI GÖR
                            </Link>
                            <Link className="navbar-item text-1" to="/products">
                                OM BLK LZY
                            </Link>
                            <Link className="navbar-item text-1" to="/jobb">
                                JOBB
                            </Link>
                            <Link className="navbar-item text-1" to="/contact">
                                KONTAKT
                            </Link>
                            {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
                        </div>
                        <div className="navbar-end has-text-centered">
                            <a
                                className="navbar-item"
                                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <span className="icon">
                                    <img src={github} alt="Github" />
                                </span> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <Link className="link" to="/blog">
                        VAD VI GÖR
                    </Link>
                    <Link className="link" to="/products">
                        OM BLK LZY
                    </Link>
                    <Link className="link" to="/jobb">
                        JOBB
                    </Link>
                    <Link className="link" to="/contact">
                        KONTAKT
                    </Link>
                </div>
            </nav>
        );
    }
};

export default Navbar;
