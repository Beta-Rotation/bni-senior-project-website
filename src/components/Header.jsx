import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
    Navbar,
    Nav,
    NavDropdown
} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md">
                <LinkContainer to="/">
                    <Navbar.Brand>Team Index Fun[ds]!</Navbar.Brand>
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
                        <LinkContainer to="/TimeTrackers">
                            <Nav.Link>Time Trackers</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Project Documents">
                            <NavDropdown.Item href="https://docs.google.com/document/d/1F1gdHGxIq9B5S1vJwiCAnaqOMJhMp2uJZ-GZUMdfkkA/edit?usp=sharing" target="_blank">
                                Project Plan
                            </NavDropdown.Item>
                            <LinkContainer to="/DomainModel">
                                <NavDropdown.Item>
                                    Domain Model
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;