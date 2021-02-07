import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Col } from 'reactstrap';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="#fff" light expand="xl">
                <NavbarBrand href="/">
                    <img src="img/logo.png" alt="logo"/>
                </NavbarBrand>
                <Col md="6" className="space"></Col>
                <NavLink href="#contacto" className="button-contact-movil">
                    <div className="img-menu animate__animated animate__pulse animate__infinite"></div>
                </NavLink>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#nosotros">Nosotros</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#diferencia">Lo que nos diferencia</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#servicios">Servicios</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#clientes">Clientes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#certificacion">Certificados y reconocimientos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#ghostwork">Trabaja con nosotros</NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink href="#contacto" className="button-contact">
                        <div className="img-menu animate__animated animate__pulse animate__infinite"></div>
                    </NavLink>
                </Collapse>
            </Navbar>
        </div>
    )
}
