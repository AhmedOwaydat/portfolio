import React, { Component } from 'react'
import './skills.css'
class skills extends Component {
    state={
        languages: ['C++', 'C#', 'Javascript', 'Assembly(x86)'],
        concepts: ['Data Structures', 'Objected Oriented Programming', 'Database', 'Algorithms analysis and design'],
        technologies: ['HTML', 'CSS/CSS3', 'Bootstrap', 'Jquery', 'React.js', 'Ajax', 'Json', 'PHP (Basics)', 'Angular4 (Basics)', 'Git (Github)', 'Jade (Basics)', 'Sass (Basics)']
    }
    render(){
        return(
            <div className="skills" id="skills">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center col-12">My Skills</h2>
                        <div className="languages col-lg-3 col-md-6 col-12">
                            <h3>Languages</h3>
                            <ul>
                            {this.state.languages.map((lang, id) => (
                                <li key={id}>{lang}</li>
                            ))}
                            </ul>
                        </div>
                        <div className="concepts col-lg-4 col-md-6 col-12">
                        <h3>Concepts</h3>
                            <ul>
                            {this.state.concepts.map((lang, id) => (
                                <li key={id}>{lang}</li>
                            ))}
                            </ul>
                        </div>
                        <div className="technologies col-lg-5 col-12">
                            <h3>Technologies</h3>
                            <ul>
                                <div className="row">
                                    <div className="col-4">
                                        {this.state.technologies.map((lang, id) => (
                                            id<4 && <li key={id}>{lang}</li>
                                        ))}
                                    </div>
                                    <div className="col-4">
                                        {this.state.technologies.map((lang, id) => (
                                            id>=4 && id<8 && <li key={id}>{lang}</li>
                                        ))}
                                    </div>
                                    <div className="col-4">
                                        {this.state.technologies.map((lang, id) => (
                                            id>=8 && <li key={id}>{lang}</li>
                                        ))}
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default skills;