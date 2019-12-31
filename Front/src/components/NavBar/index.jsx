import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText} from "reactstrap";

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggle = () => {setMobileOpen(!mobileOpen)}
  return (
    <Navbar color='dark' dark expand='md'>
      <NavbarBrand href={'/'}>Rick and Morty App</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={mobileOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink href={'/episodes'}> Episodios </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={'/characters'}> Personajes </NavLink>
          </NavItem>
          <NavItem>
          </NavItem>
        </Nav>
        <NavbarText>
          <NavLink className='float-right' href={'/login'}>Cerrar Sesión</NavLink>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Index;