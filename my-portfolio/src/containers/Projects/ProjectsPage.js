import React, { useState, useEffect } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Styling
import './ProjectsPage.css';

const ProjectsPage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect (() => {
        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div id="container">
            <div id="projects-typography">
                Projects
            </div>

            <section>
                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div class="project-overlay">
                        <div class="project-text">Hello World</div>
                    </div>
                </div>

                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div class="project-overlay">
                        <div class="project-text">Hello World</div>
                    </div>
                </div>

                <div className="project-container">
                    <img src="https://i.imgur.com/Ejn9qV0.jpg" alt="" className="project-image"/>
                    <div class="project-overlay">
                        <div class="project-text">Hello World</div>
                    </div>
                </div>
            </section>
        
        </div>
    )
}

export default ProjectsPage;