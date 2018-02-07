import React, { Component } from "react";
import {
    NavLink,
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="landing">
                <div className="landing-callout">
                    <div className="landing-intro">
                        <div className="mobile-photo"></div>
                        <h1>Tommy Truong</h1>
                        <p>
                            <span>UC San Diego Computer Engineering graduate.</span>
                            <span>Voracious appetite for software development and data science.</span>
                        </p>
                    </div>
                    <div className="landing-actions">
                        <NavLink to="/blog" className="landing-action">
                            <span className="icon-book"></span>
                        </NavLink>
                        <a className="landing-action" href="styles/docs/TommyTruongResume.pdf">
                            <span className="icon-profile"></span>
                        </a>
                        <a className="landing-action" href="https://www.linkedin.com/in/ttthao/">
                            <span className="icon-linkedin"></span>
                        </a>
                        <a className="landing-action" href="mailto:tttruong701@gmail.com">
                            <span className="icon-mail"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;