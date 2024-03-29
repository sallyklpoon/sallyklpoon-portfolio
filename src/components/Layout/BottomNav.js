import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"

import linkedin from '../../config/assets/icons/linkedin.svg';
import mail from '../../config/assets/icons/mail.svg';
import github from '../../config/assets/icons/github.svg';


const BottomNav = () => {
    return (
            <Navbar fixed="bottom">
                <Container>
                <Nav className="ml-3 mb-3">
                    <div>Let's Connect

                    <div id="connect-icons">
                    <a href="https://www.linkedin.com/in/sally-poon-30719b120/">
                        <img src={linkedin} alt=""/></a>

                    <a href="mailto:sallyklpoon@gmail.com" className="ml-2">
                        <img src={mail} alt=""/></a>

                    <a href="https://github.com/sallyklpoon" className="ml-2">
                        <img src={github} alt=""/></a>

                    </div>

                    </div>
                </Nav>
                </Container>
            </Navbar>

    )
}

export default BottomNav;