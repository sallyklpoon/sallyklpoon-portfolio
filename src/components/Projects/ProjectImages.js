// React
import React from 'react';

/**
 * Returns passed images into full-paged images
 * @param {*} images - a list of image urls with id
 * @returns - image elements
 */

const ProjectImages = ( {images} ) => {
    return (images.map(image => 
                <img src={image.url} key={image.id} alt="project-img" className="full-img"  data-aos="fade-up" data-aos-duration="2000"/>
        )
    )
};

export default ProjectImages;