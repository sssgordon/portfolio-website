import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App(props) {
    return (
        <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </div>
    );
}

export default App;
