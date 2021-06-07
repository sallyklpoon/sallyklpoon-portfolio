import React, { useState, useEffect } from 'react';

import './HomePage.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import portrait from '../../config/assets/images/me.png';
import linkedin from '../../config/assets/icons/linkedin.svg';
import mail from '../../config/assets/icons/mail.svg';
import github from '../../config/assets/icons/github.svg';
import file from '../../config/assets/icons/file.svg';
import resume from '../../config/files/Resume.pdf';


const HomePage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect (() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
        <div id="homepage-bg" className="full-viewport">

            <div className="homepage-container">

                <div id="homepage-name">
                    <span id="s" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.15}px)`}}>S</span>
                    <span id="a" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.25}px)`}}>A</span>
                    <span id="l-1" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.35}px)`}}>L</span>
                    <span id="l-2" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.45}px)`}}>L</span>
                    <span id="y" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.25}px)`}}>Y</span>

                    <span id="p" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.45}px)`}}>P</span>
                    <span id="o-1" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.25}px)`}}>O</span>
                    <span id="o-2" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.35}px)`}}>O</span>
                    <span id="n" className="homepage-typography" style={{transform: `translateY(${offsetY * 0.40}px)`}}>N</span>

                </div>

                <ul id="homepage-nav" style={{transform: `translateY(${offsetY * 0.3}px)`}}>
                        <li><h1 className="display-3"><a href="/projects">Projects</a></h1></li>
                        <li><h1 className="display-3"><a href="/playground">Playground</a></h1></li>
                        <li><h1 className="display-3"><a href="/#about">About</a></h1></li>
                </ul>

            </div>

        </div>

        <div id="about-bg" className="full-viewport">

            <div id="about" className="homepage-container">
                <h1  id="about-me-header" className="display-4">An aspiring developer with a background in Psychological research and design.</h1>
                <div id="about-text-container" className="two-column" style={{transform: `translateY(${offsetY * 0.07}px)`}}>
                    <p>Sally is a Vancouver-based aspiring developer with a BA in Psychology, she is currently completing the Computer Systems
                        Technology program at British Columbia Institute of Technology (BCIT) in the co-op program.                                                                                                                          
                    </p>
                    <p>Her career switch into tech is driven by an interest in solving problems and her enjoyment of learning new languages. 
                        After all, is programming not a combination of these two?
                    </p>
                </div>
                <img src={portrait} alt="" id="portrait" />

                <div className="two-column" style={{transform: `translateY(${offsetY * 0.07}px)`}}>
                    <ul>
                        <li>Led and worked in team settings as a <strong>Project Manger</strong>, <strong>front-end developer</strong>, <strong>UX/UI Designer</strong>, and <strong>Back-end developer</strong></li>
                        <li>Experience in <strong>Agile/Scrum Development</strong> and <strong>Gitflow Workflow</strong></li>
                    </ul>

                    <ul>
                        <li>Skills in: Python, Javascript, React.js, MySQL, Firebase, and more</li>
                        <li>Ability to adapt and succeed under steep learning curves</li>
                    </ul>

                </div>


            </div>
        </div>

        <div id="connect" className="full-viewport">
            <h1 className="display-1">Let's <br/>Connect</h1>

            <div id="connect-links-container" className="two-column">
                <ul>
                    <li><a href="https://www.linkedin.com/in/sally-poon-30719b120/" >
                        <img src={linkedin} alt=""/><span className="connect-link">LinkedIn</span></a></li>
                    <li><a href="mailto:sallyklpoon@gmail.com">
                        <img src={mail} alt=""/><span clasName="connect-link">Email</span></a></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/sallyklpoon" className="ml-2">
                        <img src={github} alt=""/><span clasName="connect-link">Github</span></a></li>
                    <li><a href={resume} className="ml-2" download>
                        <img src={file} alt=""/><span clasName="connect-link">Resume</span></a></li>
                </ul>
            </div>

        </div>
        </>
    )
}

export default HomePage;