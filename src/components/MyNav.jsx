import { Button, Col, Form, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import logo_epic_bnb2 from "../assets/logo_epic_bnb2.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMyAnnunciAction, getMyPrenotazioniAction, logoutAction } from "../redux/actions";
import { useEffect, useState } from "react";
function MyNav({ onSearch }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  //const prenotazioni = useSelector((state) => state.prenotazioni);

  //const MyAnnunci = useSelector((state) => state.annunci);

  // const email = localStorage.getItem("email");
  //const prenotazioniPerEmail = prenotazioni.filter((prenotazione) => prenotazione.user.email === email);

  const [showLogin, setShowLogin] = useState(true);
  const [filter, setFilter] = useState("");
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    onSearch(value);
  };

  useEffect(() => {
    if (user != null) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, []);

  const handleLogout = () => {
    dispatch(logoutAction());

    setShowLogin(true);
  };

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
          {location.pathname === "/" && (
            <Col sm={4} className="d-none d-lg-block">
              <Form className="d-flex mt-4 position-relative">
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="rounded-pill"
                  aria-label="Search"
                  value={filter}
                  onChange={handleFilterChange}
                />
              </Form>
            </Col>
          )}

          <Col xs={3} lg={5}>
            <Nav
              className="d-flex justify-content-end text-align-center mt-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {location.pathname !== "/" && (
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
                </Button>
              )}

              <Button variant="transparent" className="mb-2">
                <Link to="/prenotazioni" className="nav-item text-decoration-none text-light">
                  Prenotazioni
                </Link>
              </Button>

              <Button variant="transparent" className="mb-2">
                <Link to="/annunci" className="nav-item text-decoration-none text-light">
                  Annunci
                </Link>
              </Button>

              <Button variant="transparent" className="mb-2">
                <Link to="/affitta" className="nav-item text-decoration-none text-light">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M11.0639 7.63177V11.1393H7.51713V13.028H11.0639V16.5356H13.0048V13.028H16.5516V11.1393H13.0048V7.63177H11.0639Z"
                      fill="white"
                    ></path>
                    <path
                      d="M13.734 0.684168C13.2611 0.240904 12.6404 0 12 0C11.3596 0 10.7389 0.240904 10.266 0.674532L0 10.7251L1.36946 12.0549L2.10837 11.3321V19.9661C2.10837 20.4094 2.29557 20.8334 2.61084 21.1418C2.92611 21.4501 3.35961 21.6332 3.81281 21.6332H20.1773C20.6305 21.6332 21.064 21.4598 21.3892 21.1418C21.7143 20.8238 21.8916 20.3998 21.8916 19.9565V11.3032L22.6305 12.0259L24 10.7251L13.734 0.684168ZM4.03941 19.7542V9.4049L11.6355 1.97542C11.6847 1.92723 11.734 1.88869 11.803 1.86942C11.8621 1.84051 11.931 1.83087 12 1.83087H12.0099C12.0788 1.83087 12.1478 1.84051 12.2069 1.86942C12.266 1.89833 12.3251 1.92723 12.3744 1.97542L19.9704 9.4049V19.7542H4.03941Z"
                      fill="white"
                    ></path>
                  </svg>
                  Affitta
                </Link>
              </Button>
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
                      <div className="ms-3">
                        <Link to="/register" className="text-decoration-none text-dark ">
                          Registration
                        </Link>
                      </div>
                      {showLogin && (
                        <div className="ms-3">
                          <Link to="/login" className="text-decoration-none text-dark ">
                            Login
                          </Link>
                        </div>
                      )}
                      {!showLogin && (
                        <div className="ms-3">
                          <Link to="/" className="text-decoration-none text-dark " onClick={handleLogout}>
                            Logout
                          </Link>
                        </div>
                      )}

                      <NavDropdown.Divider />
                      <a href="#i" className="text-decoration-none text-dark ms-3">
                        Contatti
                      </a>
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
