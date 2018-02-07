import React, { Component } from "react";
import {
    NavLink,
} from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <div className="blog-header">
                    <NavLink to="/">
                        <span className="icon-home3"></span>
                    </NavLink>
                    <h2>Tommy's Thoughts</h2>
                </div>
                <div className="blog-list">
                </div>
            </div>
        );
    }
}

export default Blog;