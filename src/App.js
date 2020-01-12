import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import Outcry from "./components/Outcry";
import ScrollToTop from "./components/ScrollToTop";
import Natours from "./components/Natours";
import Jotto from "./components/Jotto";
import Birch from "./components/Birch";
import Lisa from "./components/Lisa";

function App(props) {
    return (
        <div className="app">
            <ScrollToTop />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/project-outcry" component={Outcry} />
                <Route exact path="/natours" component={Natours} />
                <Route exact path="/jotto" component={Jotto} />
                <Route exact path="/birch" component={Birch} />
                <Route exact path="/project-lisa" component={Lisa} />
            </Switch>
        </div>
    );
}

export default App;
