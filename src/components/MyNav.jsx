import { Button, Col, Form, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import logo_epic_bnb2 from "../assets/logo_epic_bnb2.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function MyNav() {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="navbar" data-bs-theme="dark">
      <Container fluid>
        <Row className="w-100 justify-content-between text-align-center ">
          <Col lg={3} className="pt-2 center-logo d-none d-lg-block">
            <Navbar.Brand>
              <img className="logo" src={logo_epic_bnb2} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggler-icon" />
          </Col>
          {location.pathname !== "/login" &&
            location.pathname !== "/register" &&
            location.pathname !== "/annunci/:id" && (
              <Col sm={5} className="d-none d-lg-block">
                <Form className="d-flex mt-4 position-relative">
                  <Form.Control type="search" placeholder="Cerca" className="" aria-label="Search" />
                  <Button className="btn-search border-0 bg-transparent position-absolute end-0">
                    <svg
                      role="img"
                      height="19"
                      width="19"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                      className="p-0"
                    >
                      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z" />
                    </svg>
                  </Button>
                </Form>
              </Col>
            )}

          <Col xs={3} lg={4}>
            <Nav
              className="d-flex justify-content-end text-align-center mt-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Button variant="transparent" className="mb-2">
                <Link to="/" className="nav-item text-decoration-none text-light">
                  <svg
                    role="img"
                    height="12"
                    width="12"
                    aria-hidden="true"
                    className="me-2 nav-icon d-lg-none"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z" />
                  </svg>
                  Home
                </Link>
              </Button>{" "}
              <Button
                variant="transparent"
                className="btn-nav d-flex flex-row text-align-center border-0 bg-transparent "
              >
                <div
                  className=" btn-profile d-flex flex-row text-align-center justify-content-center "
                  data-bs-theme="dark"
                >
                  <div className="me-2 my-0 p-0  d-flex flex-row text-align-center justify-content-center position-relative d-none d-lg-block">
                    <NavDropdown className="text-decoration-none mt-3 p-0 position-absolute " align="end">
                      <NavDropdown.Item className="">
                        <Link to="/register" className="text-decoration-none text-dark ">
                          Registration
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="">
                        <Link to="/login" className="text-decoration-none text-dark ">
                          Login
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <Link to="#action5" className="text-decoration-none text-dark ms-3">
                        Contatti
                      </Link>
                    </NavDropdown>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.3rem"
                      viewBox="0 0 448 512"
                      className="mt-2 nav-icon"
                    >
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 39 39"
                    aria-hidden="true"
                    role="presentation"
                    fill="secondary"
                    focusable="false"
                    style={({ display: " block" }, { height: "100%" }, { width: "100%" })}
                    className="my-0 ms-2 p-0  nav-icon d-none d-lg-block"
                  >
                    <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
                  </svg>
                </div>
              </Button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default MyNav;
