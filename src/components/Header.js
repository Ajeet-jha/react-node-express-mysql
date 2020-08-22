import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">To Do Mern App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" >All Lists</Nav.Link>
                <Nav.Link as={Link} to="/create_todo" >Craete Todo</Nav.Link>
                <Nav.Link as={Link} to="/all_done" >Done list</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Header