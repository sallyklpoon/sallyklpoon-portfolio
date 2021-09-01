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
import ProjectImages from '../../components/Projects/ProjectImages';

// Styling
import './ProjectsPage.css';

// Data
import data from '../../config/data/projects_data.json';

const ProjectDetailsPage = () => {

    const [, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const htmlIntro = data.sprout.description;
    const htmlRetrospective = data.sprout.retrospective;

    useEffect (() => {
        window.scrollTo(0, 0)
        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const heroStyle = {
        backgroundImage: `url(${data.sprout.hero})`,
        height: '40vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow:'inset 0 -20px 10px #3844282c'
    }

    return (
        <>
            <div id="capwise-hero" style={heroStyle}></div>
            
            <div id="project-page-container">

                <h1 className="display-1" id="top">{data.sprout.name}</h1>
                <p className="lead project-roles"> 
                    <strong>My Roles: </strong>{data.sprout.roles}
                </p>

                <div className="project-section">
                    <p dangerouslySetInnerHTML={ {__html: htmlIntro} }/>

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
                            <BulletContent bullets={data.sprout.techstack_c2}/>
                        </div>
                    </ul>
                </div>


                <div className="project-section">
                    <h2 className="display-2">Retrospective</h2>
                    <p dangerouslySetInnerHTML={ {__html: htmlRetrospective} }/>
                    <DoubleAccordion content={data.sprout}/>
                    <ProjectImages images={data.sprout.project_imgs}/>
                    <hr/>
                </div>
        
                <Link to={data.sprout.nextproj_url}>
                    <img src={data.sprout.nextproj_img} alt="next-project-capwise" className="full-img next-project"></img>
                </Link>

                <div id="project-page-btm_block"></div>
            </div>
        </>
    )

}

export default ProjectDetailsPage;