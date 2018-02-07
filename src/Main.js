import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" component={Blog}/>
                </div>
            </HashRouter>
        );
    }
}

export default Main;