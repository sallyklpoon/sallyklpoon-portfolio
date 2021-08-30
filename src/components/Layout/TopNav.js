import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const TopNav = () => {
    return (
        // <Navbar collapseOnSelect expand="lg" fixed="top" id="top-nav">
        // <Container className="navbar-container">
        //     <Navbar.Brand href="/">Sally Poon</Navbar.Brand>
        // <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        // <Navbar.Collapse id="responsive-navbar-nav">
        // <Nav className="ml-auto">
        //     <Nav.Link href="/#projects" className="mr-3">Projects</Nav.Link>
        //     <Nav.Link href="playground" className="mr-3">Play</Nav.Link>
        //     <Nav.Link href="/#about" className="mr-3">About</Nav.Link>
        // </Nav>
        // </Navbar.Collapse>
        // </Container>
        // </Navbar>

        <Navbar collapseOnSelect expand="lg" fixed="top" id="top-nav">
        <Container>
        <Navbar.Brand href="/">Sally Poon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            <Nav.Link href="/#about">Who, Me?</Nav.Link>
            <Nav.Link eventKey={2} href="/#projects">
                Projects
            </Nav.Link>
            <Nav.Link eventKey={3} href="/playground" disabled>
                Play
            </Nav.Link>
            <Nav.Link eventKey={4} href="/#connect">
                Let's Connect
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default TopNav;
