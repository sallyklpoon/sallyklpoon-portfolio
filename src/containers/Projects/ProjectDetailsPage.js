// =====================================
//              IMPORTS
// =====================================

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

// =====================================
//              COMPONENT
// =====================================

const ProjectDetailsPage = () => {

    useEffect (() => {
        window.scrollTo(0, 0)
    }, []);

    const [, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    let projectParam = useParams().project_name
    const htmlIntro = data[projectParam].description;
    const htmlRetrospective = data[projectParam].retrospective;
    
    const heroStyle = {
        backgroundImage: `url(${data[projectParam].hero})`,
        height: '40vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow:'inset 0 -20px 10px #3844282c'
    };

    useEffect (() => {

        window.addEventListener('scroll', handleScroll);
        AOS.init({});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    return (
        
        <>
            <div style={heroStyle}></div>
            
            <div id="project-page-container">

                <h1 className="display-1" id="top">{data[projectParam].name}</h1>
                <p className="lead project-roles"> 
                    <strong>My Roles: </strong>{data[projectParam].roles}
                </p>

                <div className="project-section">
                    <p dangerouslySetInnerHTML={ {__html: htmlIntro} }/>

                    <ProjectLinks url={data[projectParam].url} 
                                github={data[projectParam].github} 
                                trello={data[projectParam].trello} 
                                devpost={data[projectParam].devpost} 
                                flowchart={data[projectParam].flowchart} />


                        {data[projectParam].pitch_url &&
                            <div className="responsive-player-container">
                                <ResponsivePlayer video_url={data[projectParam].pitch_url}/>
                             </div>
                        }

                </div>

                <div className="project-section">
                    <hr/>
                    <h2 className="display-2">Tech Stack</h2>
                    <img className="full-img" src={data[projectParam].techstack_img} alt="techstack" data-aos="fade-up" data-aos-duration="2000"/>

                    <ul className="columns-2" data-aos="fade-down" data-aos-duration="1000">
                        <div><BulletContent bullets={data[projectParam].techstack_c1}/></div>
                        <div><BulletContent bullets={data[projectParam].techstack_c2}/></div>
                    </ul>
                </div>


                <div className="project-section">
                    <h2 className="display-2">Retrospective</h2>
                    <p dangerouslySetInnerHTML={ {__html: htmlRetrospective} }/>
                    <DoubleAccordion content={data[projectParam]}/>
                    <ProjectImages images={data[projectParam].project_imgs}/>
                    <hr/>
                </div>
        
                <Link to={data[projectParam].nextproj_url}>
                    <img src={data[projectParam].nextproj_img} alt="next-project" className="full-img next-project"></img>
                </Link>

                <div id="project-page-btm_block"></div>
            </div>
        </>
    )

}

export default ProjectDetailsPage;