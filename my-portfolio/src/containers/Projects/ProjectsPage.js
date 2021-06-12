import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Styling
import './ProjectsPage.css';

// Data
import projects from '../../config/data/projects.json';

// Components
import ProjectGallery from '../../components/Projects/ProjectGallery';

const ProjectsPage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect (() => {
        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div className="center-all">
            <div id="projects-typography">
                Projects
            </div>

            <section>
                <ProjectGallery projects={projects} />

                <Link to="/blah">
                    <div className="project-container" data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                        <div className="project-overlay">
                            <h4 className="project-title">Project 1</h4>
                            <div className="project-text">May 2021 - Present </div>
                            <div className="view-project">View Project</div>
                        </div>
                    </div>
                </Link>

                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div className="project-overlay">
                        <div className="project-text">Hello World</div>
                    </div>
                </div>

                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div className="project-overlay">
                        <p className="project-text">Hello World</p>
                    </div>
                </div>

                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div className="project-overlay">
                        <h4 className="project-title">Project 1</h4>
                        <div className="project-text">Hello World</div>
                    </div>
                </div>

                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div className="project-overlay">
                        <div className="project-text">Hello World</div>
                    </div>
                </div>

                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div className="project-overlay">
                        <p className="project-text">Hello World</p>

                    </div>
                </div>
            </section>

            <footer id="project-foot"></footer>
        
        </div>
    )
}

export default ProjectsPage;