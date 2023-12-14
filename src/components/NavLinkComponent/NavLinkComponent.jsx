import { useState } from 'react';
import { Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import './NavLinkComponent.css';

export const NavLinkComponent = ({ category }) => {

    const [busqueda, setBusqueda] = useState('');

    const navigate = useNavigate();

    const handleBusqueda = (e) => {
        e.preventDefault();

        if (busqueda.trim() !== '') 
            navigate(`/search/${busqueda}`);
        else 
            navigate(`/search/todo`);
    }

    return (
        <>
            <Nav.Link as={Link} to={'/'} className='link btnNavBarStyle'>INICIO</Nav.Link>
            <NavDropdown title={<span className="btnNavBarStyle">GENERO</span>} id="basic-nav-dropdown">
                { category.map((cate) => {
                    return (<NavDropdown.Item as={Link} key={cate.id} to={`/category/${cate.category}`} className='link text-white'>{cate.category}</NavDropdown.Item>)
                }) }
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