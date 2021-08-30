// React
import React from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import ResponsivePlayer from '../../../components/Layout/ResponsivePlayer';

// Styling
import './SproutPage.css';
import '../ProjectsPage.css';

// Assets
import sproutTechStack from '../../../config/assets/images/sprout/techstack_sprout.png';

const SproutPage = () => {

    return (

        <div>

            <div id="sprout-hero" className="project-hero"></div>
            
            <div id="project-page-container">

                <h1 className="display-1">Sprout</h1>

                <p>Sprout is a social gardening application to promote bee-friendly and native-plant gardens across the Greater Vancouver area. 
                    Using the application, the Sprout team hoped to inspire users to connect with their community and learn more about the ecosystem around them. <br/><br/>
                    
                    Plant data was collected with courtesy from Kwantlen’s School of Horticulture.
                </p>

                <ResponsivePlayer video_url="https://youtu.be/5AZUDrRrKr0"/>

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



                    When my team and I started out, we were thinking of ways to bring technology into sustainable living. 
                    I’ve always been interested in the cause of protecting bees and Nicholas, our back-end developer, 
                    was getting into gardening and wanted to learn more about native plants in the Vancouver area. 
                    We combined these two ideas with an element of community because we all learned to emphasize how important community is after 
                    studying online throughout the pandemic.

                    

                </div>

            </div>
            
            

        </div>
    )

}

export default SproutPage;