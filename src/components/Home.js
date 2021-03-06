import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import outcryImg from "../assets/outcry_img.jpg";
import natoursImg from "../assets/natours_img.jpg";
import jottoImg from "../assets/jotto_img.jpg";
import birchImg from "../assets/birch_img.jpg";
import lisaImg from "../assets/lisa_img.jpg";

export default function Home(props) {
    const pathname = props.location.pathname;
    return (
        <div className="home u-margin-top-arrow">
            <Header pathname={pathname} />
            <div className="home__welcome u-padding-left-medium">
                <span className="home__welcome--text home__welcome--text--1 primary-stroke">
                    Wish you a grand&nbsp;
                    <span className="home__welcome--text home__welcome--text--2 secondary-stroke">
                        2020
                    </span>
                    .
                </span>
            </div>
            <div className="home__arrow u-margin-top-large">&darr;</div>
            <div className="home__projects u-margin-top-medium u-margin-bottom-medium">
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="/project-outcry">
                                    <img
                                        className="square__img"
                                        alt="project outcry"
                                        src={outcryImg}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="natours">
                                    <img
                                        className="square__img"
                                        src={natoursImg}
                                        alt="natours"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="/jotto">
                                    <img
                                        className="square__img"
                                        src={jottoImg}
                                        alt="jotto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="/birch">
                                    <img
                                        className="square__img"
                                        src={birchImg}
                                        alt="birch"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <Link to="/project-lisa">
                                    <img
                                        className="square__img"
                                        src={lisaImg}
                                        alt="project lisa"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__footnote">
                <div className="footnote">&#9400; 2020 Gordon So</div>
            </div>
        </div>
    );
}
