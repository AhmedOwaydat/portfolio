import React, { Component } from 'react'
import './about-me.css'

class aboutMe extends Component {
    render(){
        return(
            <div className="about-me" id="about-me">
                <div className="container">
                    <div className="row">
                        <div className="myImage mx-auto col-lg-5 col-md-4 d-none d-md-block">
                            <img src="images/user-img.jpg" className="img-thumbnail" alt="Ahmed Samir" />
                            <div>
                                <ul>
                                    <li><a href="https://www.facebook.com/AhmedSamir.ASO" rel="noopener noreferrer" target="_blank"><img src="images/Facebook-Logo.png" className="img-fluid" alt="facebook"/></a></li>
                                    <li><a href="https://github.com/AhmedOwaydat/Front-End-Projects" rel="noopener noreferrer" target="_blank"><img src="images/Github-icon.png" className="img-fluid" alt="github"/></a></li>
                                    <li><a href="https://www.linkedin.com/in/ahmed-samir-ali-579234140/" rel="noopener noreferrer" target="_blank"><img src="images/linkedin-icon.png" className="img-fluid" alt="linkedin"/></a></li>
                                    <li><a href="mailto:ahmed.samer@cis.asu.edu.eg"><img src="images/email-icon.png" className="img-fluid" alt="email"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-details col-lg-7 col-md-8 col-12">
                            <h2 className="">WHO AM I</h2>
                            <p>I'm Ahmed Samir, I'm a Computer Science Ain-Shams university
                                graduate 2018, I've worked on many projects as I'm graduated 
                                from front end nanodegree program with experience in 
                                (HTML, CSS/CSS3, Bootstrap, Jquery, React.js, Ajax, Json) and basics of 
                                git (Github), Also I know basics of (php, angular, mysql, sass, jade) and made many projects self study.
                            </p>
                            <p>During my study at college I participated in open source community 
                                as a member and vice head projects committee and web committee 
                                member which increased my knowledge in data structure, OOP and 
                                algorithms analysis and design with more practice in web technologies
                            </p>
                            <p>
                                <span>Email: </span>
                                ahmed.samer@cis.asu.edu.eg
                            </p>
                            <p>
                                <span>Phone: </span>
                                01142424718
                            </p>
                            <p>
                                <span>Military State: </span>
                                Exempted
                            </p>
                    
                            <div className="row form-group ">
                                <div className="col-md-5 col-12 text-center mx-auto">
                                    <a className="form-control btn btn-primary" href="mailto:ahmed.samer@cis.asu.edu.eg" role="button">CONTACT ME</a>
                                </div>
                                <div className="col-md-5 col-12 text-center mx-auto">
                                    <a className="form-control btn btn-dark" href="https://drive.google.com/open?id=10U9qEU8ykzvhJqe2pY714rYF5IR-yVAN" rel="noopener noreferrer" target="_blank" role="button">SEE MY CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default aboutMe;