import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    const link =
        props.pathname === "/" ? (
            <Link to="/about" className="button--text">
                about
            </Link>
        ) : props.pathname === "/about" ? (
            <Link to="/" className="button--text">
                back
            </Link>
        ) : (
            <Link to="/" className="button--text">
                back
            </Link>
        );
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title">gordon so</div>
                <div className="header__link">{link}</div>
            </div>
        </div>
    );
}
