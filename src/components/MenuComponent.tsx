'use client';

import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function MenuComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Energy Shop
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} href="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} href="/bin">
            Bin
          </Nav.Link>

          <Nav.Link as={Link} href="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}