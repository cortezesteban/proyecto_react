import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagenLogo from '../../assets/img/logo_juego.png';
import CartWidget from '../CartWidget/CartWidget';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
                    <div className='d-flex justify-content-center align-items-center w-100'>
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
                    </div>
                    <div className='w-25 d-flex justify-content-end align-content-center'>
                        <CartWidget contador={contador}/>
                    </div>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavBarComponent;