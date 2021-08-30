// React
import React from 'react';

/**
 * Returns passed content bulleted
 * @param {*} content - string 
 * @returns - bulleted content
 */
const BulletContent = ( {content} ) => {
    return (

        <li>{content}</li>

    )
};

export default BulletContent;