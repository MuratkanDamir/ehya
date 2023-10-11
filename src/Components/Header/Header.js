<<<<<<< HEAD
import Navigation from "./Navigation/Navigation";
import Container from "./Container/Container";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <Navigation />
            <Container />
        </div>
        
=======
import styles from "./Header.module.css";
import {Button, Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';
import LogoImage from "../../Source/Logo.png"
function Header() {
    return (
      <Navbar expand="md" className='bg-body-temporary mt-3'>
        {/* <p className={styles.customDropdownTitle}>dskjblsdhbl</p> */}
        <Container>
            <Navbar.Brand href="#home">
                <Image src={LogoImage}></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
                <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                <NavDropdown title={<span className={styles.customDropdownTitle}>Landing</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" >1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span className={styles.customDropdownTitle}>Pages</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pages 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pages 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pages 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="Docs" className='text-light'>Docs</Nav.Link>
                <Nav.Link href="Help" className='text-light'>Help</Nav.Link>
                <Button variant="primary">Login</Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
>>>>>>> 0136caf0966237187816552a740f7224d4d24bcc
    );
}

export default Header;