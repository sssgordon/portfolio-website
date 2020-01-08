import React from "react";

import Header from "./Header";

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

            <div className="home__projects u-margin-top-huge">
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    data-aos-duration="1400"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell">
                                <div className="square__video">
                                    <video
                                        className="square__video--content"
                                        loop
                                        autoplay
                                        muted
                                    >
                                        <source
                                            src="../assets/sham-shui-po-bg-vid-2.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser is not supported!
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="500"
                    data-aos-duration="1400"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    data-aos-duration="1400"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="500"
                    data-aos-duration="1400"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="square"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    data-aos-duration="1400"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="square__content">
                        <div className="square__table">
                            <div className="square__table-cell"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
