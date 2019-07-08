import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import axios from './../../common/axios/axios-cognito'
import logo from './../../../logo.png'
import queryString from 'query-string'


const Header = () => {

    const [user, setUser] = useState(null);

    const logout = () => {
        if (typeof window !== 'undefined') {
            window.location.href = "https://learntechpuzz.auth.us-east-1.amazoncognito.com/logout?client_id=1eahvov81l07rbts4k64er6mfa&logout_uri=https://s3.amazonaws.com/learntechpuzz/public.html";
            //window.location.href = "CognitoAuthLogout-URL";
        }
    }

    useEffect(() => {

        const value = queryString.parse(window.location.search);
        const accessToken = value.access_token;
        if (accessToken == null) {
            logout();
        }

        const auth = 'Bearer '.concat(accessToken);
        axios.get('/oauth2/userInfo', { headers: { Authorization: auth } })
            .then(response => {
                console.log(response.data);
                setUser(response.data.username);
            })
            .catch((error) => {
                console.log('error ' + error);
                logout();
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
                        Welcome <b>{user}</b>!
                    </Navbar.Text>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/#logout" onClick={()=> logout}>logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
