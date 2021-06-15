import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar collapseOnSelect fixed="top" id="top-nav">
            <Navbar.Brand href="/">Sally Poon</Navbar.Brand>
        
        <Nav className="ml-auto">
            <Nav.Link href="/#projects" className="mr-3">Projects</Nav.Link>
            <Nav.Link href="playground" className="mr-3">Playground</Nav.Link>
            <Nav.Link href="/#about" className="mr-3">About</Nav.Link>
        </Nav>
        </Navbar>
    )
}

export default TopNav;
