import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import axios from './../../common/axios/axios-cognito'
import logo from './../../../logo.png'
import queryString from 'query-string'


const Header = () => {

    const [user, setUser] = useState(null);


    useEffect(() => {

        const value = queryString.parse(window.location.search);
        const accessToken = value.access_token;

        const auth = 'Bearer '.concat(accessToken);
        axios.get('/oauth2/userInfo', { headers: { Authorization: auth } })
            .then(response => {
                console.log(response.data);
                setUser(response.data.username);
            })
            .catch((error) => {
                console.log('error ' + error);
            });

    }, []);

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
                        Welcome <a href="/#user">{user}</a>
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