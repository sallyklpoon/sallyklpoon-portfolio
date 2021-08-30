// React
import React from 'react';
import { Link } from 'react-router-dom';

// AOS
import 'aos/dist/aos.css';

// Components
import ResponsivePlayer from '../../../components/Layout/ResponsivePlayer';
import DoubleAccordion from '../../../components/Layout/DoubleAccordion';

// Styling
import './SproutPage.css';
import '../ProjectsPage.css';

// Assets
import sproutTechStack from '../../../config/assets/images/sprout/techstack_sprout.png';
import sproutGoals from '../../../config/assets/images/sprout/sprout_goals.png';
import nextCapwise from '../../../config/assets/images/capwise/next_capwise.png';
import sproutLayouts from '../../../config/assets/images/sprout/sprout_layouts.png';

// Data
import projectsContent from '../../../config/data/projects_data.json';

const SproutPage = () => {

    return (

        <div>

            <div id="sprout-hero" className="project-hero"></div>
            
            <div id="project-page-container">

                <h1 className="display-1">Sprout</h1>

                <div className="project-section">

                    <p >
                        Sprout is a social gardening application to promote bee-friendly and native-plant gardens across the Greater Vancouver area. 
                        Using the application, the Sprout team hoped to inspire users to connect with their community and learn more about the ecosystem around them. <br/><br/>
                        
                        Plant data was collected with courtesy from Kwantlen’s School of Horticulture.
                    </p>

                    <ResponsivePlayer video_url="https://youtu.be/5AZUDrRrKr0"/>

                </div>


                <div className="project-section">
                    <h2 className="display-2">Tech Stack</h2>
                    <img className="full-img" src={sproutTechStack} alt="techstack-sprout"/>

                    <ul className="columns-2">
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

                <hr/>

                <div className="project-section">
                    <h2 className="display-2">Reflections</h2>

                    <p>When my team and I started out, we were thinking of ways to bring technology into sustainable living. 
                    I’ve been interested in the cause of protecting bees and Nicholas, our back-end developer, 
                    was getting into gardening and wanted to learn more about native plants in the Vancouver area. 
                    We combined these two ideas with an element of community because we all learned to emphasize how important community is after 
                    studying online throughout the pandemic.</p>

                    
                    <DoubleAccordion content={projectsContent.sprout}/>

                    <img src={sproutGoals} alt="sprout-goals" className="full-img"/>


                    <img src={sproutLayouts} alt="sprout-layouts" className="full-img"/>

                    <hr/>
                </div>
        

                <Link to="/capwise">
                    <img src={nextCapwise} alt="next-project-capwise" className="full-img"></img>
                </Link>


                

            </div>
            
            

        </div>
    )

}

export default SproutPage;