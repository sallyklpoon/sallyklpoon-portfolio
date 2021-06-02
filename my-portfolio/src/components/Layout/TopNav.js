import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import './TopNav.css'

const TopNav = () => {
    return (
        <Navbar fixed="top" id="top-nav">
            <Navbar.Brand href="/">Sally Poon.</Navbar.Brand>
        
        <Nav id="top-nav-right">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="playground">Playground</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        </Navbar>
    )
}

export default TopNav;
