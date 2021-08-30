// React
import React from 'react';

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

                </div>

            </div>
            
            

        </div>
    )

}

export default SproutPage;