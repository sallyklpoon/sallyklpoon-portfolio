// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import ResponsivePlayer from '../../../components/Layout/ResponsivePlayer';
import DoubleAccordion from '../../../components/Layout/DoubleAccordion';

// Styling
import './CapWisePage.css';
import '../ProjectsPage.css';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Assets
import githubIcon from '../../../config/assets/icons/github.svg';
import arrowIcon from '../../../config/assets/icons/arrow-right-circle.svg';
import trelloIcon from '../../../config/assets/icons/columns.svg';
import capwiseTechStack from '../../../config/assets/images/capwise/techstack_capwise.png';
import capwiseOutcomes from '../../../config/assets/images/capwise/outcomes_capwise.png';
import capwiseLayouts from '../../../config/assets/images/capwise/capwise_thumb.png'
import nextNamu from '../../../config/assets/images/namu/next_namu.png';

// Data
import projectsContent from '../../../config/data/projects_data.json';

const CapWisePage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect (() => {
        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>

            <div id="capwise-hero" className="project-hero"></div>
            
            <div id="project-page-container">

                <h1 className="display-1" id="top">CapWise</h1>
                <p className="lead project-roles"> 
                    <strong>My Roles:</strong> Full-stack Developer, Designer and Project Manager
                </p>

                <div className="project-section">

                    <p >
                        CapWise introduces a crowd occupancy counter for retail spaces that will make use of counted data. 
                        Aside from counting crowd flow, CapWise offers special scheduling and marketing features to make use of in-store counting data. <br/><br/>
                        
                        In this project, I worked on the back and front-end of a count-tracking page, using local storage for log-in, and utilizing Firebase to make update, add, and delete calls to and from a NoSQL database.
                        Aside from the front-end Counter page, I spent time to work on the Alerts, Settings, and User Authentication process.<br/><br/>
                    </p>

                    <div className="project-links-container">
                        <Button variant="primary" size="lg" href="https://capwise-fac45.web.app/index.html">
                            <img src={arrowIcon} alt="" className="button-icon"/>See the Project</Button>
                        <Button variant="primary" size="lg" href='https://github.com/sallyklpoon/CapWise'>
                            <img src={githubIcon} alt="" className="button-icon"/>GitHub</Button>
                        <Button variant="primary" size="lg" href='https://trello.com/b/YTQ9Rxxj/1800-capwise'>
                            <img src={trelloIcon} alt="" className="button-icon"/>Team Trello</Button>
                    </div>

                    <div className="responsive-player-container">
                        <ResponsivePlayer video_url="https://youtu.be/s-Y8NRgPwH4"/>
                    </div>


                </div>


                <div className="project-section">

                    <hr/>
                    <h2 className="display-2">Tech Stack</h2>
                    <img className="full-img" src={capwiseTechStack} alt="techstack-capwise" data-aos="fade-up" data-aos-duration="2000"/>

                    <ul className="columns-2" data-aos="fade-down" data-aos-duration="1000">
                        <div>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Javascript</li>
                        </div>
                        <div>
                            <li>Firestore</li>
                            <li>Firebase</li>
                        </div>
                    </ul>
                </div>


                <div className="project-section">
                    <h2 className="display-2">Retrospective</h2>

                    <p>Given a prompt to find pandemic solutions, my peers and I sought to consider the new normal of people counting in businesses. At the start of the pandemic,
                        businesses were asked to crowd-control their stores. In an age of information and data, my team and I felt that there's a wasted use of this tracked data.

                        Thus, CapWise seeks to use people tracking data to help assist small to medium business owners with their business decisions. <br/><br/>

                        As a very-first full deployed project on the web, there were many interesting challenges and a lot of growth that came out of this project.
                    </p>

                    
                    <DoubleAccordion content={projectsContent.capwise}/>

                    <img src={capwiseOutcomes} alt="capwise-outcomes" className="full-img"  data-aos="fade-up" data-aos-duration="2000"/>
                    <img src={capwiseLayouts} alt="capwise-layouts" className="full-img"  data-aos="fade-up" data-aos-duration="2000"/>

                    <hr/>
                </div>
        

                <Link to="/namu">
                    <img src={nextNamu} alt="next-project-capwise" className="full-img next-project"></img>
                </Link>

                <div id="project-page-btm_block"></div>
            </div>

        </div>
    )


}

export default CapWisePage;