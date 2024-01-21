// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Outlet } from "react-router-dom";
import "../Header/Header.css";
import { useEffect, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const headerRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <span
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : " "
                    }
                  >
                    <Nav.Link href="#Product">Product</Nav.Link>
                  </span>
                  <NavLink
                    to={"/Aboutus"}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : " "
                    }
                  >
                    <Nav.Link href="#action2">About</Nav.Link>
                  </NavLink>
                  <span
                    className={(navClass) =>
                      navClass.isActive ? "nav_active" : " "
                    }
                  >
                    <Nav.Link href="#action2" onClick={handleShow}>
                      Contact
                    </Nav.Link>
                  </span>
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  <Button variant="" className="btn">
                    Login
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />

      <Modal show={show} className="back" onHide={handleClose}>
        <div className="form_font">
          <Modal.Header className="Model" closeButton>
            <Modal.Title>Contact Form</Modal.Title>
          </Modal.Header>
          <Modal.Body className="form">
            <Form>
              <FormControl
                sx={{ m: 1, width: "53ch" }}
                variant="standard"
                className="form_group1"
              >
                <InputLabel
                  // className="text-white"
                  htmlFor="standard-adornment-password"
                >
                  User Name
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  autoComplete="off"
                  // className="text-white"
                  type={"text"}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Name"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className="text-black">
                        <AccountCircleIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "53ch" }}
                variant="standard"
                className="form_group1"
              >
                <InputLabel
                  // className="text-white"
                  htmlFor="standard-adornment-password"
                >
                  Email
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  autoComplete="off"
                  // className="text-white"
                  type={"text"}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className="text-black">
                        <MailIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "53ch" },
                }}
                noValidate
                autoComplete="off"
                
              >
                <div className="text">
                  <TextField
                    id="standard-textarea"
                    label="Multiline"
                    placeholder="Placeholder"
                    // className={classes.textField}                    
                    variant="standard"
                  />
                </div>
              </Box>
            </Form>
          </Modal.Body>
          <Modal.Footer className="Model">
            <Button variant="contained" className="btn1" onClick={handleClose}>
              Close
            </Button>{" "}
            <Button
              variant="contained"
              onClick={handleClose}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Header;
