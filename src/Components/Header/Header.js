import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  const activeStyle = {
    fontWeight: "500",
    color: "#dda83f",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      className="py-3"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">
              Anasayfa
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/Courses">
              Kurslar
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/exams">
              Online Sınav Sistemi
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/About">
              Hakkımızda
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/Contact">
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
