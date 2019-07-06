import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import logo from './../../../logo.png'

const Header = () => {
    return (
        <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Navbar.Brand href="/">
                <img
                    alt="learntechpuzz"
                    src={logo}
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Action" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/#mycourses">My Courses</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item id="feedbackLink" href="/feedback">Feedback</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        Welcome <a href="/#user">User!</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;