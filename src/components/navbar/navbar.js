import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './navbar.css'
import $ from 'jquery'
class navbar extends Component {

    state = {
        sections: [
            {
                name: 'Home',
                distination: '#home'
            },
            {
                name: 'about me',
                distination: '#about-me'
            },
            {
                name: 'Skills',
                distination: '#skills'
            },
            {
                name: 'Portfolio',
                distination: '#portfolio'
            },
            {
                name: 'Contact Me',
                distination: '#contact-me'
            }
        ]
    }

    onNavClick = (distination_id) => {
        $('html, body').animate({
            scrollTop: $(distination_id).offset().top - 50
        }, 700);
    }

    render() {
        return(
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                            {
                                this.state.sections.map((section, id) => (
                                    <li className="nav-item" id={id} key={id} onClick={() => this.onNavClick(section.distination)}>
                                        <span className="nav-link">{section.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar;