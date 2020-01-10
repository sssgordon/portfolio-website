import React from "react";
import Stack from "./Stack";
import Header from "./Header";

export default function about(props) {
    const pathname = props.location.pathname;
    return (
        <div className="about u-margin-top-large">
            <Header pathname={pathname} />
            <Stack />
            <div className="about__introduction">
                <div className="row">
                    <div className="col-1-of-4">
                        <div
                            className="about__introduction--left"
                            data-aos="fade"
                            data-aos-delay="0"
                            data-aos-duration="1300"
                            data-aos-easing="ease-out"
                        >
                            <ul>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/so-gordon"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/sssgordon"
                                        target="_blank"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:gordondashso@gmail.com">
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3-of-4">
                        <div
                            className="about__introduction--right"
                            data-aos="fade"
                            data-aos-delay="200"
                            data-aos-duration="1300"
                            data-aos-easing="ease-out"
                        >
                            <p>
                                My name is Gordon So. <br></br>I am a Canadian
                                developer raised in Hong Kong and working in the
                                Netherlands. I work for the people I love,
                                respect and care about, including myself. My
                                approach is to give my work 100% and forget the
                                rest. My preference is developing with
                                JavaScript, React and Express for full-stack
                                apps. I also like to make things handsome with
                                CSS. When I found myself in the Canadian winter
                                at 16, I made my blog snow with HTML and CSS. It
                                was my first time seeing snow and my first
                                digital winter. I hope you enjoyed my little
                                origin story. I am always ready to meet up with
                                and be inspired by cool people.
                            </p>
                            <p className="footnote">&#9400; 2020 Gordon So</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
