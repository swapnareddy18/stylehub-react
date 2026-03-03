import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { GiLipstick } from "react-icons/gi";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: "linear-gradient(90deg, #ff6a88, #ff99ac)",
        fontSize: "1.3rem",
        padding: "1rem",
        fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <Container>
        <Navbar.Brand href="/home" className="d-flex align-items-center text-white">

          {/* Lipstick logo */}
          <GiLipstick
            style={{
              marginRight: "10px",
              fontSize: "2.8rem",
              color: "#fff",
              filter: "drop-shadow(0 0 6px #ff1493)",
            }}
          />

          <span style={{ fontSize: "1.8rem", letterSpacing: "1px" }}>
            StyleHub
          </span>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            {["home", "products", "contact"].map((path) => (
              <Nav.Link
                key={path}
                as={NavLink}
                to={`/${path}`}
                style={({ isActive }) => ({
                  color: isActive ? "white" : "#222",
                  backgroundColor: isActive ? "#d81b60" : "transparent",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  marginRight: "8px",
                  transition: "0.3s",
                })}
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </Nav.Link>
            ))}

          </Nav>

          <Nav>
            <NavDropdown title="Account" id="user-dropdown">
              <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
