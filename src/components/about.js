import React from "react";

export default function about(props) {
    return (
        <div className="about">
            <div className="stack">
                <span className="stack__item stack__item--1 secondary-fill">
                    JavaScript
                </span>
                <span className="stack__item stack__item--2 primary-stroke">
                    REACT
                </span>
                <span className="stack__item stack__item--3 primary-fill">
                    Redux
                </span>
                <span className="stack__item stack__item--4 secondary-fill">
                    Node<span className="secondary-stroke">JS</span>
                </span>
                <span className="stack__item stack__item--4 primary-fill">
                    Syntactically{" "}
                    <span className="primary-stroke">AWESOME</span> Style Sheets
                </span>
                <span className="stack__item stack__item--1 secondary-fill">
                    Jest
                </span>
                <span className="stack__item stack__item--2 primary-stroke">
                    ENZYME
                </span>
                <span className="stack__item stack__item--4 secondary-fill">
                    Express<span className="secondary-stroke">JS</span>
                </span>
                <span className="stack__item stack__item--3 primary-fill">
                    Sequelize
                </span>
                <span className="stack__item stack__item--4 primary-fill">
                    Postgre<span className="primary-stroke">SQL</span>
                </span>
                <span className="stack__item stack__item--2 secondary-stroke">
                    DIALOGFLOW
                </span>
            </div>
        </div>
    );
}
