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
                <h3 className="heading-secondary secondary-fill">
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
                <p className="tagline secondary-fill">
                    Ensuring protestors’ right to legal counsel
                </p>
                <div className="divider secondary-background u-margin-bottom-small"></div>
                <p className="paragraph">
                    Project Outcry is an app made for Hong Kong protestors to
                    inform their lawyers the moment they get arrested. Before
                    taking to the streets, they would sign up on the website and
                    create a personal profile including a unique alias. At the
                    moment of arrest simply shout the alias to Google Assistant,
                    Project Outcry will immediately send an email to notify the
                    user's lawyer of the incident.
                </p>
                <p className="paragraph">
                    Built for a 4-day Hackathon at Codaisseur, this app won the
                    second-most-favorited app by popular vote. I used
                    JavaScript, React, Redux and Google Dialogflow for this
                    project. You can learn more about the technical features by
                    visiting the{" "}
                    <a href="#" className="link">
                        repository
                    </a>{" "}
                    on GitHub.
                </p>
            </div>
            <img
                className="project__image u-margin-bottom-medium"
                src={outcry_1}
                alt="landing page"
            />
            <img
                className="project__image"
                src={outcry_2}
                alt="user details page"
            />
            <div className="footnote">&#9400; 2020 Gordon So</div>
        </div>
    );
}
