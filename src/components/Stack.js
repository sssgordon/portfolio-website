import React from "react";

export default function Stack(props) {
    return (
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
            <span className="stack__item stack__item--5 primary-fill">
                Syntactically <span className="primary-stroke">AWESOME</span>{" "}
                Style Sheets
            </span>
            <span className="stack__item stack__item--6 secondary-fill">
                Jest
            </span>
            <span className="stack__item stack__item--7 primary-stroke">
                ENZYME
            </span>
            <span className="stack__item stack__item--8 secondary-fill">
                Express<span className="secondary-stroke">JS</span>
            </span>
            <span className="stack__item stack__item--9 primary-fill">
                Sequelize
            </span>
            <span className="stack__item stack__item--10 primary-fill">
                Postgre<span className="primary-stroke">SQL</span>
            </span>
            <span className="stack__item stack__item--11 secondary-stroke">
                DIALOGFLOW
            </span>
            <span className="stack__item stack__item--12 primary-fill">
                Bootstrap
            </span>
        </div>
    );
}
