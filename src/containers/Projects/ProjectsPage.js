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
            </section>

            <footer id="project-foot"></footer>
        
        </div>
    )
}

export default ProjectsPage;