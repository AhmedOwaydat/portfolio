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
                                <p>I'm a front end developer</p>
                                <p>my passion is acquire and learn more and apply my existing knowledge in participating into more  projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default homepage;