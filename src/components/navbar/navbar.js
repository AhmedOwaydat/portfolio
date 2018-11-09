import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './navbar.css'

class navbar extends Component {

    render() {
        return(
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href='#home'>Navbar</a>      
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about-me">about me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-me">contact me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar;