import React, { useState, useEffect } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsPage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect (() => {
        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
        <div id="projects-typography">
            <span id="pr-p" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>P</span>
            <span id="pr-r" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>R</span>
            <span id="pr-o" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>O</span>
            <span id="pr-j" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>J</span>
            <span id="pr-e" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>E</span>
            <span id="pr-c" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>C</span>
            <span id="pr-t" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>T</span>
            <span id="pr-s" className="pr-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>S</span>
        </div>
        
        </>
    )
}

export default ProjectsPage;