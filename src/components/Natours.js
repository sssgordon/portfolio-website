import React from "react";
import Header from "./Header";

import video_mp4 from "../assets/natours_video.mp4";
import video_webm from "../assets/natours_video.webm";
import natours_1 from "../assets/natours_1.png";
import natours_2 from "../assets/natours_2.png";
import natours_3 from "../assets/natours_3.png";

export default function Natours(props) {
    const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header pathname={pathname} />
            <div className="project__heading">
                <h1 className="project__heading--title heading-primary primary-stroke">
                    Natours
                </h1>
                <h3 className="project__heading--description heading-secondary primary-fill">
                    Responsive website<br></br>Sass
                </h3>
            </div>
            <div className="project__video">
                <video
                    className="project__video--content"
                    loop
                    autoPlay
                    muted
                    preload="metadata"
                >
                    <source src={video_mp4} type="video/mp4" />
                    <source src={video_webm} type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>
            <div className="project__description">
                <p
                    className="tagline primary-fill"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                >
                    Outdoors is where life happens
                </p>
                <div
                    className="divider primary-background u-margin-bottom-small"
                    data-aos="extendRight"
                    data-aos-delay="800"
                    data-aos-duration="1200"
                    data-aos-easing="ease-out-quart"
                ></div>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    Natours is a mock website for a nature tourism agency. This
                    project demonstrates my knowledge of Sass, responsive
                    design, browser support, CSS architecture, and CSS
                    animations. The website is responsively designed to fit
                    different screen widths and resolutions. You're welcome to{" "}
                    <a
                        href="https://agile-sea-24801.herokuapp.com/index.html"
                        target="_blank"
                        className="link"
                    >
                        visit
                    </a>{" "}
                    on web or mobile to see the difference!
                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    You may also head to the GitHub{" "}
                    <a
                        href="https://github.com/sssgordon/natours"
                        target="_blank"
                        className="link"
                    >
                        repository
                    </a>{" "}
                    to learn more about this project.
                </p>
            </div>
            <img
                className="project__image u-margin-bottom-medium"
                src={natours_1}
                alt="header"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="project__image u-margin-bottom-medium"
                src={natours_2}
                alt="tours section"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <img
                className="project__image"
                src={natours_3}
                alt="navigation popup"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="center-bottom"
            />
            <div className="footnote">&#9400; 2020 Gordon So</div>
        </div>
    );
}
