import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ContactContext } from "../../context/ContactContextProvider";

const NavBar = () => {
  const { searchVal, setSearchVal, getContact } = useContext(ContactContext);
  useEffect(() => {
    getContact();
  }, [searchVal]);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink id="not-underline" to="/">
          <Navbar.Brand href="#">ContactBook</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/add">
              Add Contact
            </NavLink>

            <NavLink className="nav-link" to="/topicsList">
              Contact List
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
