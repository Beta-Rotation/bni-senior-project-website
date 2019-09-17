import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
    Navbar,
    Nav,
    NavItem
} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="md">
                <LinkContainer to="/">
                    <Navbar.Brand>Index Fun[ds]!</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbar" />

                <Navbar.Collapse id="navbar">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>About the Project</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ProgressCharts">
                            <Nav.Link>Progress Charts</Nav.Link>
                        </LinkContainer>
                        <li className="nav-item">
                            <a className="nav-link" href="./TimeTrackers.html">Time Trackers</a>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;