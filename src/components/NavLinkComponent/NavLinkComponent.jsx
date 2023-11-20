import React from 'react'
import { Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './NavLinkComponent.css';

export const NavLinkComponent = () => {
    return (
        <>
            <Nav.Link as={Link} to={'/'} className='link btnNavBarStyle'>INICIO</Nav.Link>
            <NavDropdown title={<span className="btnNavBarStyle">CATEGORIA</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/category/Estrategia' className='link text-white'>Estrategia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Disparos' className='link text-white'>Disparos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Rol' className='link text-white'>Rol</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Aventura' className='link text-white'>Aventura</NavDropdown.Item>
            </NavDropdown>
            <Form.Control type="text" placeholder="Nombre de Juego" className='formStyle' />
            <Button type="submit" className='btn-dark'>Buscar</Button>
        </>
    )
}
