import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Outcry from "./components/Outcry";
import ScrollToTop from "./components/ScrollToTop";
import Natours from "./components/Natours";
import Jotto from "./components/Jotto";
import Birch from "./components/Birch";

function App(props) {
    return (
        <div className="app">
            <ScrollToTop />
            <Birch />
            {/* <Switch>
                <Route exact path="/jotto" component={Jotto} />
                <Route exact path="/natours" component={Natours} />
                <Route exact path="/project-outcry" component={Outcry} />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Switch> */}
        </div>
    );
}

export default App;
