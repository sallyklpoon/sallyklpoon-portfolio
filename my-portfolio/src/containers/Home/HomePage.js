import React from 'react';

import './HomePage.css';


const HomePage = () => {
    return (
        <div id="homepage-bg">

            <div id="homepage-nav">
                <p id="fname" className="homepage-typography">Sally </p>
                <p id="lname" className="homepage-typography">Poon</p>


            </div>

            <ul id="hpage-nav">
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/playground">Playground</a></li>
                    <li><a href="/about-sally">About</a></li>
            </ul>
        </div>
    )
}

export default HomePage;