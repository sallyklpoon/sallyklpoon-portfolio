import React from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectCard = ({ project }) => {
    return (

    <Link to={`/${project.name}`} key={project.id}>
    <div className="project-container" data-aos="fade-up" data-aos-duration="1000">
        <img src={project.image_url} alt="" className="project-image"/>
        <div className="project-overlay">
            <h4 className="project-title">{project.name}</h4>
            <div className="project-text">{project.date}</div>
            <div className="view-project">View Project</div>
        </div>
    </div>
    </Link>

    )
}

export default ProjectCard;