import React, { Component } from 'react'
import './home.css'

class homepage extends Component {
    render(){
        return(
            <div className="home" id="home">
                <div className="home-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img src="images/user-img.jpg" className="user-img img-thumbnail rounded-circle" alt="user" />
                                <h2>Hello, i'm Ahmed Samir</h2>
                                <p>Front End Developer</p>
                                <p>my passion is acquiring and learning more and to apply my existing knowledge in participating into more  projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default homepage;