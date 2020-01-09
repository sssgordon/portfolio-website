import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Outcry from "./components/Outcry";
import ScrollToTop from "./components/ScrollToTop";
import Natours from "./components/Natours";

function App(props) {
    return (
        <div className="app">
            <ScrollToTop />
            <Natours />>
            {/* <Route exact path="/project-outcry" component={Outcry} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} /> */}
        </div>
    );
}

export default App;
