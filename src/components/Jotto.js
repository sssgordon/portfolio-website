import React from "react";
import Header from "./Header";

import jotto_1 from "../assets/jotto_1.png";

export default function Jotto(props) {
    const pathname = props.location.pathname;
    return (
        <div className="project u-margin-top-large">
            <Header pathname={pathname} />
            <div className="project__heading">
                <h1
                    className="project__heading--title heading-primary secondary-stroke"
                    style={{ textTransform: "none" }}
                >
                    Jotto
                </h1>
                <h3 className="project__heading--description heading-secondary secondary-fill">
                    Word game app<br></br>test-driven development
                </h3>
            </div>
            <div className="project__image--main">
                <img className="project__image" src={jotto_1} alt="game" />
            </div>
            <div className="project__description">
                <p
                    className="tagline secondary-fill"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1500"
                    data-aos-easing="ease"
                >
                    Try to guess the five-letter secret word
                </p>
                <div
                    className="divider secondary-background u-margin-bottom-small"
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
                    Jotto is a word game where the player tries to guess the
                    five-letter secret word. After every attempt, the app will
                    tell the player the amount of letters in the guessed word
                    matching the secret word. Let's say the secret word is
                    "party" and the guessed word is "train", the app will tell
                    you three letters are matching.{" "}
                    <a
                        href="http://obscure-fortress-88963.herokuapp.com"
                        target="_blank"
                        className="link"
                    >
                        Have a go
                    </a>{" "}
                    and good luck!
                </p>
                <p
                    className="paragraph"
                    data-aos="fade"
                    data-aos-delay="1300"
                    data-aos-duration="1300"
                    data-aos-easing="ease"
                    data-aos-anchor=".divider"
                >
                    This jotto game demonstrates my execution of test-driven
                    development using Jest and Enzyme on React and Redux. You
                    can learn more about my implementation by visiting the{" "}
                    <a
                        href="https://github.com/sssgordon/jotto"
                        target="_blank"
                        className="link"
                    >
                        repository
                    </a>{" "}
                    on GitHub.
                </p>
            </div>
            <div className="footnote">&#9400; 2020 Gordon So</div>
        </div>
    );
}
