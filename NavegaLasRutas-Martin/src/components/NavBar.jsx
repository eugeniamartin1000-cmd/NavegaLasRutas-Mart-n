import '../assets/css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="nav-container">
        
        <Navbar.Brand as={NavLink} to="/">
          <img src="/brand-logo.svg" alt="Logo Sophia" className="brand-logo" />
        </Navbar.Brand>

       
        <Nav className="nav-links">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>

     
          <div className="dropdown">
            <span className="texto-menu">Productos</span>
            <div className="dropdown-menu">
              <NavLink to="/category/Controladoras" className="dropdown-item">Controladoras</NavLink>
              <NavLink to="/category/SmartLed" className="dropdown-item">Smart Led</NavLink>
              <NavLink to="/category/SmartLocks" className="dropdown-item">Smart Locks</NavLink>
              <NavLink to="/category/SmartTouch" className="dropdown-item">Smart Touch</NavLink>
              <NavLink to="/category/SmartRoof" className="dropdown-item">Smart Roof</NavLink>
            </div>
          </div>
        </Nav>

    
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;

