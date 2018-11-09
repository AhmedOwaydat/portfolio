import React, { Component } from 'react'
import './contact-me.css'

class contactMe extends Component {
    render(){
        return(
            <div className="contact-me" id="contact-me">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-8 col-12">
                            <p><span className="d-md-none"><img src="images/email-icon.png" className="img-fluid rounded-circle" alt=""/></span>ahmed.samer@cis.asu.edu.eg</p>
                        </div>
                        <div className="col-md-3 col-sm-4 col-12">
                            <p><span><img src="images/whatsapp-icon.png" className="img-fluid rounded-circle" alt=""/></span>01142424718</p>
                        </div>
                        <div className="col-md-4 col-12">
                            <p>© 2018 Ahmed Samir</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default contactMe;