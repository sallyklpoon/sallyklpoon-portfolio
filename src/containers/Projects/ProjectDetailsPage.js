// React
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import ResponsivePlayer from '../../components/Layout/ResponsivePlayer';
import DoubleAccordion from '../../components/Layout/DoubleAccordion';
import BulletContent from '../../components/Layout/BulletContent';
import ProjectLinks from '../../components/Projects/ProjectLinks';

// Styling
import './ProjectsPage.css';

// Data
import data from '../../config/data/projects_data.json';

const ProjectDetailsPage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const htmlIntroPart = data.sprout.description;

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

                <h1 className="display-1" id="top">{data.sprout.name}</h1>
                <p className="lead project-roles"> 
                    <strong>My Roles: </strong>{data.sprout.roles}
                </p>

                <div className="project-section">

                    <p dangerouslySetInnerHTML={ {__html: htmlIntroPart} }>
                        
                    </p>

                    {/**buttons here */}
                    <ProjectLinks   url={data.sprout.url} 
                                    github={data.sprout.github} 
                                    trello={data.sprout.trello} 
                                    devpost={data.sprout.devpost} 
                                    miro={data.sprout.miro} />

                    <div className="responsive-player-container">
                        <ResponsivePlayer video_url={data.sprout.pitch_url}/>
                    </div>


                </div>


                <div className="project-section">

                    <hr/>
                    <h2 className="display-2">Tech Stack</h2>
                    <img className="full-img" src={data.sprout.techstack_img} alt="techstack-capwise" data-aos="fade-up" data-aos-duration="2000"/>

                    <ul className="columns-2" data-aos="fade-down" data-aos-duration="1000">
                        <div>
                            <BulletContent bullets={data.sprout.techstack_c1}/>
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

                    
                    <DoubleAccordion content={data.sprout}/>

                    <img src={data.sprout.summary_img} alt="outcomes" className="full-img"  data-aos="fade-up" data-aos-duration="2000"/>
                    <img src={data.sprout.project_img} alt="layouts" className="full-img"  data-aos="fade-up" data-aos-duration="2000"/>

                    <hr/>
                </div>
        

                <Link to="/namu">
                    <img src={data.sprout.nextproj_img} alt="next-project-capwise" className="full-img next-project"></img>
                </Link>

                <div id="project-page-btm_block"></div>
            </div>

        </div>
    )


}

export default ProjectDetailsPage;