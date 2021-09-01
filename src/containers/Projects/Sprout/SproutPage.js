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
import './SproutPage.css';
import '../ProjectsPage.css';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Assets
import sproutTechStack from '../../../config/assets/images/sprout/techstack_sprout.png';
import sproutGoals from '../../../config/assets/images/sprout/sprout_goals.png';
import nextCapwise from '../../../config/assets/images/capwise/next_capwise.png';
import sproutLayouts from '../../../config/assets/images/sprout/sprout_layouts.png';
import arrowIcon from '../../../config/assets/icons/arrow-right-circle.svg';
import trelloIcon from '../../../config/assets/icons/columns.svg';

// Data
import projectsContent from '../../../config/data/projects_data.json';

const SproutPage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect (() => {
        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    //**Scroll  */

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (

        <div>

            <div id="sprout-hero" className="project-hero"></div>
            
            <div id="project-page-container">

                <h1 className="display-1">Sprout</h1>
                <p className="lead project-roles"> 
                    <strong>My Roles:</strong> Full-stack Developer/Designer, Project Manager, and Product Owner
                </p>

                <div className="project-section">

                    <p>
                        Sprout is a social gardening application to promote bee-friendly and native-plant gardens across the Greater Vancouver area. 
                        Using the application, the Sprout team hoped to inspire users to connect with their community and learn more about the ecosystem around them. <br/><br/>

                        As a Full-Stack Developer, some of my most notable contributions to the project includes the implementation of both the back and front-end of a user's sprout profiles (each individual plant's record), plant database search, plant database results, alerts,and leaderboard.
                        
                        Plant data collected was provided with courtesy from <a href='https://plantdatabase.kpu.ca/'>Kwantlen Polytechnic University's School of Horticulture (2015)</a>. <br/><br/>

                        🏆 Sprout is awarded <a href="https://commons.bcit.ca/news/2021/06/creating-a-sustainability-app-so-much-more-than-writing-code/">Best Design in BCIT CST program's Projects II</a> for the term of Fall/Winter 2021 out of 51 total projects.
                    </p>

                    <div className="project-links-container">
                        <Button variant="primary" size="lg" href="https://my-sprout.ca">
                            <img src={arrowIcon} alt="" className="button-icon"/>See the Project</Button>
                        <Button variant="primary" size="lg" href="https://trello.com/b/BxvUW9V5/dtc-team-03">
                            <img src={trelloIcon} alt="" className="button-icon"/>Sprout Team Trello</Button>
                    </div>

                    <div className="responsive-player-container">
                        <ResponsivePlayer video_url="https://youtu.be/5AZUDrRrKr0"/>
                    </div>


                </div>


                <div className="project-section">

                    <hr/>
                    <h2 className="display-2">Tech Stack</h2>
                    <img className="full-img" src={sproutTechStack} alt="techstack-sprout" data-aos="fade-up" data-aos-duration="2000"/>

                    <ul className="columns-2" data-aos="fade-down" data-aos-duration="1000">
                        <div>
                            <li>React.js</li>
                            <li>Javascript</li>
                            <li>Cloudinary</li>
                            <li>React-bootstrap</li>
                        </div>
                        <div>
                            <li>Axios</li>
                            <li>Express</li>
                            <li>Postgres</li>
                            <li>Heroku</li>
                        </div>
                    </ul>
                </div>


                <div className="project-section">
                    <h2 className="display-2">Retrospective</h2>

                    <p>When my team and I started out, we were thinking of ways to bring technology into sustainable living. 
                    I’ve been interested in the cause of protecting bees and Nicholas, our back-end developer, 
                    was getting into gardening and wanted to learn more about native plants in the Vancouver area. 
                    We combined these two ideas with an element of community because we all learned to emphasize how important community is after 
                    studying online throughout the pandemic.</p>

                    
                    <DoubleAccordion content={projectsContent.sprout}/>

                    <img src={sproutGoals} alt="sprout-goals" className="full-img"  data-aos="fade-up" data-aos-duration="2000"/>


                    <img src={sproutLayouts} alt="sprout-layouts" className="full-img"  data-aos="fade-up" data-aos-duration="2000"/>

                    <hr/>
                </div>
        

                <Link to="/capwise">
                    <img src={nextCapwise} alt="next-project-capwise" className="full-img next-project"></img>
                </Link>

                <div id="project-page-btm_block"></div>
            </div>

        </div>
    )

}

export default SproutPage;