import React from "react";
import { getBooks, deleteBook } from "../../services/books.services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Booklist() {
	const [books_, setBooks] = useState([{}]);
	const navigate = useNavigate();
	useEffect(() => {
		loadData();
	}, []);
	async function loadData() {
		const res = await getBooks();
		setBooks(res.data);
	}

	async function apply(e) {
		switch (e.value) {
			case "supp":
				deleteBook(e.id);
				window.location.reload(false);
				break;
			case "edit":
				navigate(`/admin/books/edit/${e.id}`) 
			
		}
	}

	return (
		<form
			onClick={(e) => {
				apply(e.target);
			}}
		>
			<br/>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nom</th>
							<th scope="col">Auteur</th>
							<th scope="col">Editeur</th>
							<th scope="col">ISBN</th>
							<th scope="col">Description</th>
							<th scope="col">Date de publication</th>
						</tr>
					</thead>
					<tbody>
						{books_.map((item, index) => {
							return  (
								<tr key={index}>
									<th scope="row">{++index}</th>
									<td>{item.name} </td>
									<td>{item.auteur} </td>
									<td>{item.editeur} </td>
									<td>{item.isbn} </td>
									<td>{item.desc} </td>
									<td>{item.date_publication} </td>
									<td>
										<input
											type="button"
											value={"edit"}
											id={item._id}
											className="btn btn-warning"
										/>{" "}
									</td>
									<td>
										<input
											type="button"
											value={"supp"}
											id={item._id}
											className="btn btn-danger"
										/>{" "}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</form>
	);
}

export default Booklist;
