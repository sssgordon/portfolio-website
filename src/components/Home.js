import React from "react";

import Header from "./Header";
import outcryImg from "../assets/outcry_img.jpg";
import natoursImg from "../assets/natours_img.jpg";
import jottoImg from "../assets/jotto_img.jpg";
import birchImg from "../assets/birch_img.jpg";
import lisaImg from "../assets/lisa_img.jpg";

export default function Home(props) {
    const pathname = props.location.pathname;
    return (
        <div className="home u-margin-top-large">
            <Header pathname={pathname} />
            <div className="home__welcome u-padding-left-medium">
                <span className="home__welcome--text home__welcome--text--1 primary-stroke">
                    Wish you a fulfilling&nbsp;
                    <span className="home__welcome--text home__welcome--text--2 secondary-stroke">
                        2020
                    </span>
                    .
                </span>
            </div>
            <div className="home__arrow u-margin-top-medium">&darr;</div>
            <div className="home__projects u-margin-top-medium u-margin-bottom-medium">
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <img className="square__img" src={outcryImg} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="500"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <img className="square__img" src={natoursImg} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <img className="square__img" src={jottoImg} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="500"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <img className="square__img" src={birchImg} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <img className="square__img" src={lisaImg} />
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
