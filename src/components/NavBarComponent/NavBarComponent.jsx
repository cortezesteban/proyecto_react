import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap';
import imagenLogo from '../../assets/img/logo_juego.png';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarComponent.css';

const NavBarComponent = ({contador}) => {
  return (
      <Navbar expand="lg" className="navBarStyle" data-bs-theme="dark">
          <Container fluid className="w-100">
              <Navbar.Brand href="#home" className="text-white">
                  <img src={imagenLogo} alt="" className="imagenLogo" />
                  <span className="nameStyle">INFINITE<span className="nameTwoStyle">GAME</span></span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-secondary bg-gradient" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto navStyle w-100">
                    <Container fluid>
                        <Row>
                            <Col sm={10} className='d-flex justify-content-center align-items-center navMovileStyle'>
                                <Nav.Link href="#home" className="btnNavBarStyle">INICIO</Nav.Link>
                                <Nav.Link href="#home" className="btnNavBarStyle">ANALISIS</Nav.Link>
                                <Nav.Link href="#home" className="btnNavBarStyle">AVANCES</Nav.Link>
                                <NavDropdown title={<span className="btnNavBarStyle">CATEGORIA</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Estrategia</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Accion</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Rol</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Aventura</NavDropdown.Item>
                                </NavDropdown>
                                <Form.Control type="text" placeholder="Nombre de Juego" className='formStyle'/>
                                <Button type="submit" className='btn-dark'>Buscar</Button>
                            </Col>
                            <Col sm={2} className='d-flex justify-content-end align-content-center cartMovileStyle'>
                                <CartWidget contador={contador}/>
                            </Col>
                        </Row>
                    </Container>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavBarComponent;