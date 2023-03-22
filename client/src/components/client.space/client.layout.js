import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

function ClientLayout() {
	return (
		<>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container className="container">
					<Navbar.Brand href="/books														">iBOOK</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/books">Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

export default ClientLayout;
