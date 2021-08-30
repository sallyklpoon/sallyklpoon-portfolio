// React
import React from 'react';

/**
 * Returns passed content bulleted
 * @param {*} bullets - an array of bullet strings 
 * @returns - bulleted content
 */
const BulletContent = ( {bullets} ) => {
    return (bullets.map(bullet => <li key={bullet.id}>{bullet.text}</li>)
    )
};

export default BulletContent;