import React from 'react';

import planty from '../../config/assets/images/planty-wave.gif';

import './styles/ComingSoon.css'

const ComingSoon = () => {
    return (
        <div id="coming-soon">
        <img src={planty} alt="planty"/>
        Coming Soon
        </div>
    )
}

export default ComingSoon;