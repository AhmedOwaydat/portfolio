import React, { Component } from 'react'
import './portfolio.css'

class portfolio extends Component {

    state = {
        projects: [
            {
                name: 'Portfolio',
                description: "Front end website developed with Reactjs, contains all my projects in web and my information",
                img: 'images/portfolio.PNG',
                link: '#'
            },
            {
                name: 'Altib-Co',
                description: "React.js based frelance site for agriculture company",
                img: 'images/altib.jpg',
                link: 'https://altib.netlify.com/'
            },
            {
                name: 'Medical Practitioner Congress',
                description: "Front end website developed with Reactjs, made as a task before interview.",
                img: 'images/medical-practitioner-congress.png',
                link: 'https://doctors-meating.netlify.com/'
            },
            {
                name: 'Neighborhood Map',
                description: 'single-page application using React featuring a map to locate some places and view some information about it.',
                img: 'images/Neighborhood-Map.PNG',
                link: 'https://ntl10.netlify.com/'
            },
            {
                name: 'Myreads',
                description: 'React Based project to put books in shelf the user need',
                img: 'images/Myreads.jpg',
                link: 'https://my-reads-proj.netlify.com/'
            },
            {
                name: 'First Template',
                description: 'I made this as training',
                img: 'images/first-template.png',
                link: 'https://surgeon-oliver-85008.netlify.com/'
            },
            {
                name: 'Second Template',
                description: 'I made this as training',
                img: 'images/second-template.png',
                link: 'https://3rdproject.netlify.com/'
            },
            {
                name: 'MP3 Player',
                description: 'built from scratch based on sound in HTML5',
                img: 'images/mp3-player.png',
                link: 'https://samirs-media-player.netlify.com/'
            },
            {
                name: 'Restaurant Reviews',
                description: 'view restaurants and when click on any of them send you to another page to review restraint information and location',
                img: 'images/restaurant-reviews.jpg',
                link: 'https://restaurants-reviews.netlify.com/'
            },
        ]
    }

    render(){
        return(
            <div className="portfolio" id='portfolio'>
                <div className="container">
                    <div className="row">
                        <h2 className="col-12">Portfolio</h2>
                        {
                            this.state.projects.map((project, id) => (
                                <div className="col-md-4 col-12" key={id}>
                                    <a href={project.link}>
                                        <div className="card mx-auto" key={id}>
                                            <div className="mycard-img">
                                                <div className="card-overlay">
                                                    <h3 className="card-title">{project.name}</h3>
                                                    <p className="card-text">{project.description}</p>
                                                </div>
                                                <img className="card-img card-img-top" src={project.img} alt={project.name}/>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default portfolio;