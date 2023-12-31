import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLinkComponent } from '../NavLinkComponent/NavLinkComponent';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import imagenLogo from '../../assets/img/logo_juego.png';

import './NavBarComponent.css';

export const NavBarComponent = ({ category }) => {
  return (
      <Navbar expand="lg" className="navBarStyle" data-bs-theme="dark">
          <Container fluid className="w-100">
              <Navbar.Brand>
                <Link to={'/'} className='link'>
                  <img src={imagenLogo} alt="" className="imagenLogo"/>
                  <span className="nameStyle">INFINITE<span className="nameTwoStyle">GAME</span></span>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-secondary bg-gradient" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto navStyle w-100">
                    <Container fluid>
                        <Row>
                            <Col sm={10} className='d-flex justify-content-center align-items-center navMovileStyle'>
                                <NavLinkComponent category={category}/>
                            </Col>
                            <Col sm={2} className='d-flex justify-content-end align-content-center cartMovileStyle'>
                                <CartWidget/>
                            </Col>
                        </Row>
                    </Container>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}