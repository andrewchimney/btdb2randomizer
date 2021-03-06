import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


class NavBar extends React.Component{
    render() {
        return (
            <Navbar expand={false}>
                <Container fluid>
                    <Navbar.Brand className="navbar-text"href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="top"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Home</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body bg="dark">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/btdb2randomizer">Battles 2 Randomizer</Nav.Link>
                                <Nav.Link href="/btdb2vip">Vip Calculator</Nav.Link>
                                <NavDropdown className="navMenu shadow-none" title="Heroes" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item className="navButton" href="/heroes/quincy">Quincy</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/heroes/gwendolin">Gwen</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/heroes/obyn">Obyn</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/heroes/strikerjones">Striker</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="navMenu shadow-none" title="Primary" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item className="navButton" href="/heroes/quincy">Quincy</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/heroes/gwendolin">Gwen</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/heroes/obyn">Obyn</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/heroes/strikerjones">Striker</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="navMenu shadow-none" title="Military" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item className="navButton" href="/monkeys/military/ace">Ace</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/military/buccaneer">Ship</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/military/dartlinggunner">Dartling</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/military/helipilot">Heli</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/military/mortar">Mortar</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/military/sniper">Sniper</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/military/sub">Sub</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="navMenu shadow-none" title="Magic" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item className="navButton" href="/monkeys/magic/alchemist">Alchemist</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/magic/druid">Druid</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/magic/ninja">Ninja</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/magic/super">Super</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/magic/wizard">Wizard</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="navMenu shadow-none" title="Support" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item className="navButton" href="/monkeys/support/bananafarm">Farm</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/support/engineer">Engineer</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/support/spikefactory">Spike Factory</NavDropdown.Item>
                                    <NavDropdown.Item className="navButton" href="/monkeys/support/village">Village</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        )
    }

}
export default NavBar;