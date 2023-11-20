import { useEffect, useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
const Header = (props) => {
  // const router = useRouter();
  //const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const [userId, setUserId] = useState("");
  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <Col>
            <Navbar expand="lg" collapseOnSelect className="header--navBar">
              <Link href={""}>
                <Navbar.Brand>
                  <Image
                    src="/images/home/TravelMemories-Logo.svg"
                    width={189}
                    height={58}
                    alt=""
                  />
                </Navbar.Brand>
              </Link>
              <div>
                <Navbar.Toggle
                  aria-controls="navbarSupportedContent"
                  onClick={toggleOffCanvas}
                />
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  responsive="lg"
                  className="header--menu-wrapper"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <Image
                        src="/images/home/TravelMemories-Logo.svg"
                        width={189}
                        height={58}
                        alt=""
                      />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Navbar expand="lg" className=" header--main-menu">
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto header--navbar-nav">
                          <Nav.Link href="#home">Holiday Packages</Nav.Link>
                          <Nav.Link href="#link2"> Group Tours</Nav.Link>
                          <Nav.Link href="#link3"> Group Tours</Nav.Link>
                          <Nav.Link href="#link4">Cruises </Nav.Link>
                          <Nav.Link href="#link5">Our Story</Nav.Link>
                          <Nav.Link href="#link5">Contact us</Nav.Link>
                          <Nav.Link href="#link5">
                            <Image
                              src="/images/home/search.svg"
                              width={19}
                              height={19}
                              alt=""
                            />
                          </Nav.Link>
                          <Nav.Link href="#link5">
                            <Image
                              src="/images/home/toggle-button.svg"
                              width={20}
                              height={16}
                              alt=""
                            />
                          </Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                  </Offcanvas.Body>
                  <div className="header--log">
                    <Link href="">
                      <Image
                        src="/images/home/account_circle.svg"
                        width={23}
                        height={23}
                        alt=""
                      />
                      <p>Member Log In</p>
                    </Link>
                  </div>
                </Offcanvas>
              </div>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
