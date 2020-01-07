import React from "react";

import Header from "./Header";

export default function Home(props) {
    const pathname = props.location.pathname;
    return (
        <div>
            <Header pathname={pathname} />
        </div>
    );
}
