import { getBooks } from "../../services/books.services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function _Booklist() {
	const [getBook, setBooks] = useState([{}]);
	const navigate = useNavigate();
	useEffect(() => {
		loadData();
	}, []);
	async function loadData() {
		const res = await getBooks();
		setBooks(res.data);
	}

	return (
		<>
			<div className="mt-3 container">
				<Row xs={3} md={5} className="g-4">
					{getBook.map((item, idx) => (
						<Col>
							<Card>
								<img src={require(`../../images/img (${++idx}).jpg`)} alt="img"  height={200} />
								<Card.Body>
									<Card.Title>Title : {item.name}</Card.Title>
									<Card.Text>ISBN : {item.isbn}</Card.Text>
									<Card.Text>Aut : {item.auteur}</Card.Text>
									<Card.Text>Edit : {item.editeur}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</>
	);
}

export default _Booklist;
