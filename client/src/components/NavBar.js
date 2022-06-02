import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function NavBar({ handleLogout, isAuthenticated }) {
  function handleAccountStatus() {
    if (isAuthenticated) {
      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/ongoingraffles">Ongoing Raffles</Nav.Link>
              <Nav.Link href="/postlisting">Post a Listing</Nav.Link>
              <Nav.Link href="/yourlistings">Your Listings</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">
                  Account Details
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    } else {
      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login/Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    }
  }
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="fs-2">
          CraigsBay
        </Navbar.Brand>
        {handleAccountStatus()}
      </Container>
    </Navbar>
  );
}

export default NavBar;
