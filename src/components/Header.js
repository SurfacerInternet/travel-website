import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from "../app/assets/img/travel-wiz-logo.png";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark sticky='top' expand='md  '>
            <NavbarBrand className='ms-5' href='/'>
                <img src={Logo} alt='travel wiz logo' height='100px' />
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav>
                    <NavItem>
                        <NavLink className='navlink' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navlink' to='/tours'>
                            <i className='fa fa-list fa-lg' /> Tours
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navlink' to='/itineraryForm'>
                            <i className='fa fa-info fa-lg' /> Itinerary
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navlink' to='/about'>
                            <i className='fa fa-address-card fa-lg'/> About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;