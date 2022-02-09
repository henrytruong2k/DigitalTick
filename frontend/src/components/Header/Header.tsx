import React from 'react';

import './Header.scss';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>MOCHI</Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
