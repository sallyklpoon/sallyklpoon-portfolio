import React from 'react';

import ProjectCard from './ProjectCard';

const ProjectGallery = ({ projects }) => {
    return (projects.map(
        project => <ProjectCard project={project}/>)
    )
}

export default ProjectGallery;