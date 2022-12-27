import {Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from "../app/assets/img/travel-wiz-logo.png";
import TourPage from "../pages/TourPage"

const Header = () => {
    return (
        <Navbar color='info'>
            <Nav>
                <NavbarBrand>
                    <img src={Logo}/>
                </NavbarBrand>
                
                    <NavLink >
                        Home
                    </NavLink>
                    
              
                <NavItem>
                    
                    <NavLink to='TourPage.js'>
                    Tours & Styles
                    </NavLink>
                    
                </NavItem>
                <NavItem>
                    Itinerary
                </NavItem>
            </Nav>
        </Navbar>
        
    )
};

export default Header