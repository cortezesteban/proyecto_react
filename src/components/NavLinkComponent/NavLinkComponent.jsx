import { useState } from 'react';
import { Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import './NavLinkComponent.css';

export const NavLinkComponent = () => {

    const [busqueda, setBusqueda] = useState('');

    const navigate = useNavigate();

    const handleBusqueda = (e) => {

        e.preventDefault();

        if (busqueda.trim() !== '') {
            navigate(`/search/${busqueda}`);
        } else {
            navigate(`/search/todo`);
        }
    }

    return (
        <>
            <Nav.Link as={Link} to={'/'} className='link btnNavBarStyle'>INICIO</Nav.Link>
            <NavDropdown title={<span className="btnNavBarStyle">GENERO</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/category/Estrategia' className='link text-white'>Estrategia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Disparos' className='link text-white'>Disparos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Rol' className='link text-white'>Rol</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Aventura' className='link text-white'>Aventura</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Supervivencia' className='link text-white'>Supervivencia</NavDropdown.Item>
            </NavDropdown>
            <Form className='d-flex justify-content-center align-items-center'>
                <Form.Control
                    type="text"
                    placeholder="Nombre de Juego"
                    className='formStyle'
                    id="formBusqueda"
                    onChange={(e) => setBusqueda(e.target.value)} />
                <Button type="submit" className='btn-dark' onClick={((e) => handleBusqueda(e))}>Buscar</Button>
            </Form>

        </>
    )
}