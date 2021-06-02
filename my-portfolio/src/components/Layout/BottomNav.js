import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import linkedin from '../../config/assets/icons/linkedin.svg';
import mail from '../../config/assets/icons/mail.svg';
import instagram from '../../config/assets/icons/instagram.svg';

const BottomNav = () => {
    return (
        <Navbar fixed="bottom">
      
            <Nav className="ml-3 mb-3">
                <div>Let's Connect

                <div id="connect-icons">
                <a href="https://www.linkedin.com/in/sally-poon-30719b120/">
                    <img src={linkedin} alt=""/></a>

                <a href="mailto:sallyklpoon@gmail.com" className="ml-2">
                    <img src={mail} alt=""/></a>

                <a href="https://www.instagram.com/sallyteaspoon/" className="ml-2">
                    <img src={instagram} alt=""/></a>

                </div>

                </div>
            </Nav>
        </Navbar>
    )
}

export default BottomNav;