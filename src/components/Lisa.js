import React from "react";
import Header from "./Header";

import video_mp4 from "../assets/lisa_video.mp4";
import video_webm from "../assets/lisa_video.webm";

export default function Lisa(props) {
    // const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header
            // pathname={pathname}
            />
            <div className="project__heading">
                <h1 className="project__heading--title heading-primary secondary-stroke">
                    project lisa
                </h1>
                <h3 className="project__heading--description heading-secondary secondary-fill">
                    Full-stack voice assistant app<br></br>Google Dialogflow
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
                    className="tagline secondary-fill"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                >
                    Wat is het menu voor vanavond?
                </p>
                <div
                    className="divider secondary-background u-margin-bottom-small"
                    data-aos="extendRight"
                    data-aos-delay="800"
                    data-aos-duration="1400"
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
                    Project-LISA is a voice assistant application for the
                    elderlies living in a retirement home in Eindhoven, the
                    Netherlands. The elderlies can ask Lisa for the dinner menu
                    of the closest kitchen via Google Assistant, while kitchen
                    staff can edit the menu on our graphic user interface.
                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    This is a collaborative project between{" "}
                    <a
                        href="https://codaisseur.com/"
                        target="_blank"
                        className="link"
                    >
                        Codaisseur
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.vitalisgroep.nl/"
                        target="_blank"
                        className="link"
                    >
                        Vitalis
                    </a>
                    . In Codaisseur this is a ongoing real-world project that is
                    passed on from one class to another, so that students get to
                    practice improving upon an existing code base. Details are
                    available in the{" "}
                    <a
                        href="https://github.com/Official-Codaisseur-Graduate/lisa-client"
                        target="_blank"
                        className="link"
                    >
                        repository
                    </a>{" "}
                    on GitHub.
                </p>
            </div>
        </div>
    );
}
