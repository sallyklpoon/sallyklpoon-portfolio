import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Styling
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// BootStrap
import Button from 'react-bootstrap/Button';

import portrait from '../../config/assets/images/portrait-1.jpg';
import linkedin from '../../config/assets/icons/linkedin.svg';
import mail from '../../config/assets/icons/mail.svg';
import github from '../../config/assets/icons/github.svg';
import file from '../../config/assets/icons/file.svg';
import resume from '../../config/files/sallyklpoon_resume.pdf';
import instagram from '../../config/assets/icons/instagram.svg';
import identity from '../../config/assets/images/type(8)_blue.gif';
import projects_head from '../../config/assets/images/h-projects.png';
import connect_head from '../../config/assets/images/h-connect.png';



const HomePage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect (() => {
        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
        <div id="homepage-full-bg">
        <div id="homepage-bg" className="full-viewport">

            <div className="homepage-container">

                <div id="homepage-name" className="accented-text">
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

                <ul id="homepage-nav" style={{transform: `translateY(${offsetY * 0.3}px)`}} >
                        <li><h1 className="display-3"><a href="/#projects" className="left">Projects</a></h1></li>
                        <li><h1 className="display-3"><a href="/#about" className="left">About</a></h1></li>
                        <li><h1 className="display-3"><a href="/playground" className="left">Play</a></h1></li>
                </ul>

            </div>

        </div>

        <div id="about-bg" className="full-viewport">

            <div id="about" className="homepage-container">

                <div id="about-text" style={{transform: `translateY(${offsetY * 0.07}px)`}}>
                    <h1  id="about-me-header" className="display-4" 
                    data-aos="fade-down" data-aos-duration="1000">Hi, I'm Sally!👋🏻 <br/> 
                    <img src={identity} alt="" id="id-gif"/> <br/> in Vancouver with a background in design and Psychological research. <br/> <br/>
                    I am currently a co-op student in the Computer Systems Technology program at BCIT.</h1>

                    <div id="about-bullets" 
                        data-aos="fade-down" data-aos-duration="1000">
                        <ul>
                            <li>Skills in: Python, Javascript, React.js, SQL, Firebase, and more</li>
                            <li>Led and worked in team settings as a <strong>Full-stack Developer</strong> and <strong>Project Manager</strong></li>
                            <li>Experimented with: Node.js, Axios, Postgres</li>
                            <li>Ability to adapt and succeed under steep learning curves</li>
                            <li>Self-taught <strong>Adobe Photoshop, After Effects, Illustrator, and InDesign</strong> as a creative outlet</li>
                        </ul>

                        <Button variant="outline-light" href={resume} download>View Resume</Button>

                    </div>

                </div>

                <img src={portrait} alt="" id="portrait" data-aos="fade-up" data-aos-duration="2000"/>

            </div>
        </div>

        <div id="projects">

            <div id="projects-head-container">
                <img src={projects_head} alt="projects-head" id="projects-head" 
                style={{transform: `translateX(-${offsetY * 0.07}px)`}}
                />
            </div>

            <div className="proj"  id="sprout">

                <div className="proj-intro-container" >
                    <h1 className="display-4 proj-head accented-text" 
                        data-aos="fade-right" data-aos-duration="1800"
                        style={{transform: `translateX(${offsetY * 0.07}px)`}}>
                        Sustainable Gardening and Community Building
                    </h1>

                    <div className="proj-img-parent" data-aos="fade-right" data-aos-duration="2350" >
                        <Link to="/sprout"><div id="sprout-img" className="proj-img" 
                        style={{transform: `scale(${offsetY * 0.00045})`}}
                        /></Link>
                    </div>
                
                </div>

                <div className="proj-para" data-aos="fade-down" data-aos-duration="1000"
                    style={{transform: `translateY(${offsetY * 0.02}px)`}}>
                    <p className="proj-descrip" >
                        <a href="/sprout" className="left"><strong>Sprout</strong></a> is a five-week Agile Development Project by 4 first-year CST 
                        students at BCIT built to encourage nurturing our knowledge of sustainable 
                        gardening within a friendly community. <br/><br/>

                        <a href="https://commons.bcit.ca/news/2021/06/creating-a-sustainability-app-so-much-more-than-writing-code/">
                            <strong>BCIT | Winner of Best Application Design</strong></a>
                    </p>

                    <Button variant="outline-dark" size="lg" href="/sprout">View Project</Button>
                </div>

            </div>

            <div className="proj" id="capwise">

                <div className="proj-intro-container" >

                    <h1 className="display-4 proj-head accented-text" 
                        data-aos="fade-right" data-aos-duration="1800"
                        style={{transform: `translateX(${offsetY * 0.06}px)`}}>
                        Getting Small Businesses Organized
                    </h1>

                    <div className="proj-img-parent" data-aos="fade-right" data-aos-duration="2350">
                        <Link to="/capwise"><div id="capwise-img" className="proj-img" 
                        style={{transform: `scale(${offsetY * 0.0004})`}} /></Link>
                    </div>

                </div>

                <div className="proj-para" data-aos="fade-down" data-aos-duration="1000"
                    style={{transform: `translateY(${offsetY * 0.02}px)`}}>
                    <p className="proj-descrip" >
                        <a href="/capwise" className="left"><strong>CapWise</strong></a> offers occupancy 
                        tracking while making use of the tracking data to offer business insights in marketing and scheduling.
                    </p>

                    <Button variant="outline-dark" size="lg" href="/capwise">View Project</Button>
                </div>

            </div>

            <div className="proj" id="namu">

                <div className="proj-intro-container" >

                    <h1 className="display-4 proj-head accented-text" 
                        data-aos="fade-right" data-aos-duration="1800"
                        style={{transform: `translateX(${offsetY * 0.05}px)`}}>
                        Raising Awareness to protect the Earth Ocean Ecosystem
                    </h1>

                    <div className="proj-img-parent" data-aos="fade-right" data-aos-duration="2350">
                        <Link to="/namu"><div id="namu-img" className="proj-img" 
                        style={{transform: `scale(${offsetY * 0.00028})`}} /></Link>
                    </div>

                </div>

                <div className="proj-para" data-aos="fade-down" data-aos-duration="1000"
                    style={{transform: `translateY(${offsetY * 0.02}px)`}}>
                    <p className="proj-descrip" >
                        <a href="/namu" className="left"><strong>Namu</strong></a> takes players on a journey with 
                        our blue whale friend who is searching for their home. During the journey, players will 
                        learn about environmental issues that affect our oceans.  

                        <br/><br/>

                        <a href="https://devpost.com/software/namu"><strong>Hack the Break Winner | Best Project Pitch</strong></a>
                    </p>

                    <Button variant="outline-dark" size="lg" href="/namu">View Project</Button>
                </div>

            </div>

            <div className="proj" id="boriya">

                <div className="proj-intro-container" >

                    <h1 className="display-4 proj-head accented-text" 
                        data-aos="fade-right" data-aos-duration="1800"
                        style={{transform: `translateX(${offsetY * 0.05}px)`}}>
                        Save the forest of Bóriya, a Text-Based Adventure
                    </h1>

                    <div className="proj-img-parent" data-aos="fade-right" data-aos-duration="2350">
                        <Link to="/boriya"><div id="boriya-img" className="proj-img" 
                        style={{transform: `scale(${offsetY * 0.0003})`}} /></Link>
                    </div>

                </div>

                <div className="proj-para" data-aos="fade-down" data-aos-duration="1000"
                    style={{transform: `translateY(${offsetY * 0.02}px)`}}>
                    <p className="proj-descrip" >
                        A dark blight surrounds the Forest of <a href="/boriya" className="left"><strong>Bóriya</strong></a>. 
                        Will you be able restore peace in the land? A text-based adventure built with Python 3.  
                    </p>

                    <Button variant="outline-dark" size="lg" href="/boriya">View Project</Button>
                </div>

            </div>

            <div className="proj" id="ola">

                <div className="proj-intro-container" >

                    <h1 className="display-4 proj-head accented-text" 
                        data-aos="fade-right" data-aos-duration="1800"
                        style={{transform: `translateX(${offsetY * 0.04}px)`}}>
                        Platform for mental health peer-support
                    </h1>

                    <div className="proj-img-parent" data-aos="fade-right" data-aos-duration="2350">
                        <Link to="/ola-chat"><div id="ola-img" className="proj-img" 
                        style={{transform: `scale(${offsetY * 0.00035})`}} /></Link>
                    </div>

                </div>

                <div className="proj-para" data-aos="fade-down" data-aos-duration="1000"
                    style={{transform: `translateY(${offsetY * 0.01}px)`}}>
                    <p className="proj-descrip" >
                        <a href="/ola-chat" className="left"><strong>Olà Chat</strong></a> is a front-end interface providing 
                        an anonymous space for participants to reach out to listeners who they are best able to share their experiences with.  
                    </p>

                    <Button variant="outline-dark" size="lg" href="/ola-chat">View Project</Button>
                </div>

            </div>

            <div id="projects-end"></div>
        </div>



        <div id="connect" className="full-viewport">

            <div id="connect-head-container" data-aos="fade-down" data-aos-duration="1500">
                <img src={connect_head} alt="lets-connect" id="connect-head"/>
            </div>

            <div id="connect-links-container" className="two-column"
                data-aos="fade-down" data-aos-duration="3000">
                <ul>
                    <li><a href="https://www.linkedin.com/in/sally-poon-30719b120/">
                        <img src={linkedin} alt=""/><span className="connect-link">LinkedIn</span></a></li>
                    <li><a href="mailto:sallyklpoon@gmail.com">
                        <img src={mail} alt=""/><span className="connect-link">Email</span></a></li>
                    <li><a href="https://www.instagram.com/sallyteaspoon/">
                        <img src={instagram} alt=""/><span className="connect-link">Instagram</span></a></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/sallyklpoon">
                        <img src={github} alt=""/><span className="connect-link">Github</span></a></li>
                    <li><a href={resume} download>
                        <img src={file} alt=""/><span className="connect-link">Resume</span></a></li>
                </ul>
            </div>

        </div>

        </div>
        </>
    )
}

export default HomePage;