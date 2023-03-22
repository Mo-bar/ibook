import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
function AdminLayout() {
	return (
		<>
			<Navbar bg="dark" expand="lg" variant="dark"  >
				<Container className="container">
					<Navbar.Brand href="#home">iBOOK</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/admin/books">Home</Nav.Link>
							<Nav.Link href="#link">Categorie</Nav.Link>
							<NavDropdown title="Livres" id="basic-nav-dropdown">
								<NavDropdown.Item href="/admin/books/new" >
									Ajouter
								</NavDropdown.Item>
								<NavDropdown.Item href="/admin/books/">
									Lister
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

export default AdminLayout;
