import React from 'react'
import { Nav, NavDropdown, Form, Button } from 'react-bootstrap';

import './NavLinkComponent.css';

export const NavLinkComponent = () => {
    return (
        <>
            <Nav.Link href="#home" className="btnNavBarStyle">INICIO</Nav.Link>
            <Nav.Link href="#home" className="btnNavBarStyle">ANALISIS</Nav.Link>
            <Nav.Link href="#home" className="btnNavBarStyle">AVANCES</Nav.Link>
            <NavDropdown title={<span className="btnNavBarStyle">CATEGORIA</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Estrategia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Accion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Rol</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Aventura</NavDropdown.Item>
            </NavDropdown>
            <Form.Control type="text" placeholder="Nombre de Juego" className='formStyle' />
            <Button type="submit" className='btn-dark'>Buscar</Button>
        </>
    )
}
