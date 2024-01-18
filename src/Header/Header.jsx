import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Outlet } from "react-router-dom";
import "../Header/Header.css";
import { useEffect, useRef } from "react";

function Header() {
  const headerRef = useRef(null);

  let stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        headerRef.current.classList.add("sticky_Nav");
      } else {
        headerRef.current.classList.remove("sticky_Nav");
      }
    });
  };
  useEffect(() => {
    stickyHeader();
  }, []);

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          ref={headerRef}
          key={expand}
          expand={expand}
          className=" navbar  "
        >
          <Container fluid>
            <Navbar.Brand href="#" className=" logo">
              Navbar Offcanvas
            </Navbar.Brand>
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
                  <NavLink
                    to={"/"}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : " "
                    }
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                  </NavLink>
                  <NavLink
                    to={"/Product"}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : " "
                    }
                  >
                    <Nav.Link href="#action2">Product</Nav.Link>
                  </NavLink>
                  <NavLink
                    to={"/Aboutus"}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : " "
                    }
                  >
                    <Nav.Link href="#action2">About</Nav.Link>
                  </NavLink>
                  <NavLink
                    to={"/Contact"}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : " "
                    }
                  >
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
                  <Button variant="" className="btn">
                    Search
                  </Button>
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
