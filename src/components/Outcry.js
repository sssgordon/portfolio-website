import React from "react";
import Header from "./Header";

import video from "../assets/outcry_video.mp4";
import outcry_1 from "../assets/outcry_1.png";
import outcry_2 from "../assets/outcry_2.png";

export default function Outcry(props) {
    // const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header
            // pathname={pathname}
            />
            <div className="project__heading">
                <h1 className="heading-primary secondary-stroke">
                    Project Outcry
                </h1>
                <h3 className="heading-tertiary secondary-fill">
                    Full-stack web app<br></br>Google Assistant
                </h3>
            </div>
            <div className="project__video">
                <video
                    className="project__video--content filter-grayscale"
                    loop
                    autoPlay
                    muted
                    preload="metadata"
                >
                    <source src={video} type="video/mp4" />
                    Your browser is not supported!
                </video>
            </div>
            <div className="project__description">
                <p className="tagline">
                    Ensuring protestors’ right to legal counsel
                </p>
                <hr className="divider" />
                <p className="paragraph">
                    Project Outcry is an app made for Hong Kong protestors to
                    inform their lawyers the moment they get arrested. They only
                    need to sign up on the website with a unique alias and tell
                    that to Google Assistant at the moment of arrest. Outcry
                    will immediately send an email to the user's lawyer.
                </p>
                <p className="paragraph">
                    This app is made with JavaScript, React, Redux and Google
                    Dialogflow. You're welcome to learn more about its technical
                    features by visiting the{" "}
                    <a
                        href="https://github.com/sssgordon/project-outcry-client"
                        className="link"
                    >
                        repository
                    </a>{" "}
                    on GitHub.
                </p>
            </div>
            <img src={outcry_1} alt="landing page" />
            <img src={outcry_2} alt="user details page" />
            <div className="footnote">&#9400; 2020 Gordon So</div>
        </div>
    );
}
