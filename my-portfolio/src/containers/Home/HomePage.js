import React from 'react';

import './HomePage.css';

// Assets
import portrait from '../../config/assets/images/me.png';

const HomePage = () => {
    return (
        <div id="homepage-bg">
        <div id="homepage-portrait"></div>
        <p id="fname" className="homepage-typography">Sally</p>
        <p id="lname" className="homepage-typography">Poon</p>

        </div>
    )
}

export default HomePage;