import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" id="top-nav">
            <Navbar.Brand href="/">Sally Poon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="/#projects" className="mr-3">Projects</Nav.Link>
            <Nav.Link href="playground" className="mr-3">Play</Nav.Link>
            <Nav.Link href="/#about" className="mr-3">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav;
