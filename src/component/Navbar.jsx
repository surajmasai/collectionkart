import React from 'react'
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
         const state = useSelector((state) => state.handleCart)

  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Link className="navbar-brand" to="/">
                        <img src="apple-touch-icon.png" alt="logo" width="30" />
                        collectionKart</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="buttons">
                              <Link to="/login" className="bth btn-outline-dark">
                                  <i className="fa fa-sign-in me-1"></i>Login</Link>
                              <Link to="/register" className="bth btn-outline-dark ms-2">
                                  <i className="fa fa-user-plus me-1"></i>Register</Link>
                              <Link to="/cart" className="bth btn-outline-dark ms-2">
                                  <i className="fa fa-shopping-cart me-1"></i>cart({state.length})</Link>
                          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;