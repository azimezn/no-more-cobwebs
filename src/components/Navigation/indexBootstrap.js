import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.css";

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Check these out!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="drumkit">Drumkit</NavDropdown.Item>
                            <NavDropdown.Item href="clock">Clock</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#contact">
                            Would you like to contact me?
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}