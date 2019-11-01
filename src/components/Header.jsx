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
                    <Navbar.Brand>Index Fun[ds]!</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbar" />

                <Navbar.Collapse id="navbar">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>About the Project</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Resources">
                            <Nav.Link>Project Resources</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="http://bnibetarotation.se.rit.edu" target="_blank">
                            Project Web Application
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Project Documents">
                            <LinkContainer to="/ProgressCharts">
                                <NavDropdown.Item>Progress Charts</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/TimeTracker">
                                <NavDropdown.Item>Time Tracker</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://docs.google.com/document/d/1F1gdHGxIq9B5S1vJwiCAnaqOMJhMp2uJZ-GZUMdfkkA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Project Plan
                            </NavDropdown.Item>
                            <LinkContainer to="/DomainModel">
                                <NavDropdown.Item>
                                    Domain Model
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1FSikFhZXgAnvy-vUnUyZ9fRj-Ef-W6qgOek7L2G_6Is/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Risk Management Table
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;