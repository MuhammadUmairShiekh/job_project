import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Outlet } from "react-router-dom";
import '../Header/Header.css'

function Header() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" navbar mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className="text-white logo">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="navbar">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Navbar Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="list  justify-content-end flex-grow-1 pe-3">
                  <NavLink to={"/"}>
                    <Nav.Link href="#action1">Home</Nav.Link>
                  </NavLink>
                  <NavLink to={"/Product"}>
                    <Nav.Link href="#action2">Product</Nav.Link>
                  </NavLink>
                  <NavLink to={"/Aboutus"}>
                    <Nav.Link href="#action2">About</Nav.Link>
                  </NavLink>
                  <NavLink to={"/Contact"}>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                  </NavLink>
                 
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </>
  );
}

export default Header;
