import React from "react";
import Header from "./Header";

import video_mp4 from "../assets/birch_video.mp4";
import video_webm from "../assets/birch_video.webm";
import birch_1 from "../assets/birch_1.png";
import birch_2 from "../assets/birch_2.png";

export default function Birch(props) {
    const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header pathname={pathname} />
            <div className="project__heading">
                <h1 className="project__heading--title heading-primary primary-stroke">
                    Birch
                </h1>
                <h3 className="project__heading--description heading-secondary primary-fill">
                    Full-stack web shop<br></br>React-Redux
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
                    Plants for the adventurous
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
                    Birch is a web shop for audacious plant-lovers. We sell
                    plants that thrive on extreme weather conditions. From your
                    bedroom to your garden, our diverse selection nurtures your
                    daring soul with a taste of adventure. If you feel like it,
                    you can learn more about a product in its details page, add
                    it to the wishlist or the basket. The basket automatically
                    calculates the total price for you before checkout.{" "}
                    <a href="#" target="_blank" className="link">
                        Bon Voyage
                    </a>
                    !
                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    This project began as a three-day group assignment to
                    practice on JavaScript, React and Redux.{" "}
                    <a
                        href="https://github.com/MelissaDTH"
                        target="_blank"
                        className="link"
                    >
                        Melissa
                    </a>{" "}
                    and I then decided to expand the project into a full-stack
                    application and made a backend with ExpressJS, Sequelize and
                    PostgreSQL. You can learn more by heading to the GitHub{" "}
                    <a
                        href="https://github.com/sssgordon/birch"
                        target="_blank"
                        className="link"
                    >
                        repository
                    </a>
                    .
                </p>
            </div>
            <img
                className="project__image u-margin-bottom-medium"
                src={birch_1}
                alt="home page"
                data-aos="fade"
                data-aos-delay="0"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="bottom-bottom"
            />
            <img
                className="project__image"
                src={birch_2}
                alt="basket page"
                data-aos="fade"
                data-aos-delay="0"
                data-aos-duration="1300"
                data-aos-easing="ease"
                data-aos-anchor-placement="bottom-bottom"
            />
            <div className="footnote">&#9400; 2020 Gordon So</div>
        </div>
    );
}
