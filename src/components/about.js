import React from "react";
import Stack from "./stack";

export default function about(props) {
    return (
        <div className="about">
            <Stack />
            <div className="about__introduction">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="about__introduction--left">
                            <ul>
                                <li>
                                    <a href="#">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="#">GitHub</a>
                                </li>
                                <li>
                                    <a href="#">Email</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3-of-4">
                        <div className="about__introduction--right">
                            My name is Gordon So . I am a Canadian developer
                            raised in Hong Kong and working in the Netherlands.
                            I work for the people I love, respect and care
                            about, including myself. My approach is to give my
                            work 100% and forget the rest. My preference is
                            developing with JavaScript, React and Express for
                            full-stack apps. I also like to make things handsome
                            with CSS. When I found myself in the Canadian winter
                            at 16, I made my blog snow with HTML and CSS. It was
                            my first time seeing snow and my first digital
                            winter. I hope you enjoyed my little origin story. I
                            am always ready to meet up and be inspired by cool
                            people.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
