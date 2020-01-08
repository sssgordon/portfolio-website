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

            <div className="home__projects u-margin-top-medium">
                <div class="square">
                    <div class="square__content">
                        <div class="square__table">
                            <div class="square__table-cell"></div>
                        </div>
                    </div>
                </div>
                <div class="square">
                    <div class="square__content">
                        <div class="square__table">
                            <div class="square__table-cell"></div>
                        </div>
                    </div>
                </div>
                <div class="square">
                    <div class="square__content">
                        <div class="square__table">
                            <div class="square__table-cell"></div>
                        </div>
                    </div>
                </div>
                <div class="square">
                    <div class="square__content">
                        <div class="square__table">
                            <div class="square__table-cell"></div>
                        </div>
                    </div>
                </div>
                <div class="square">
                    <div class="square__content">
                        <div class="square__table">
                            <div class="square__table-cell"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
