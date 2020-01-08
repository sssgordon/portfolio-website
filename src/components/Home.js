import React from "react";

import Header from "./Header";

export default function Home(props) {
    const pathname = props.location.pathname;
    return (
        <div className="home u-margin-top-large">
            <Header pathname={pathname} />
            <div className="home__welcome">
                <span className="home__welcome--text home__welcome--text--1 primary-stroke">
                    Wish you a fulfilling&nbsp;
                    <span className="home__welcome--text home__welcome--text--2 secondary-stroke">
                        2020s
                    </span>
                    .
                </span>
            </div>

            <div className="home__projects"></div>
        </div>
    );
}
