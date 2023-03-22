import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { getBookById, updateBook } from "../../services/books.services";
import { getCategories } from "../../services/category.servives";

export function Editbook() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [cats, setCats] = useState([{}]);
	const [getBook, setBook] = useState({});

	useEffect(() => {
		loadCategories();
		loadBook();
	}, []);
	async function loadCategories() {
		const res = await getCategories();
		setCats(res.data);
	}
	async function loadBook() {
		const res = await getBookById(id);
		setBook(res.data);
	}

	async function HundleBook(event) {
		event.preventDefault(); //? pour éviter de rafraichir la page

		const name_ = document.getElementById("Nom").value;
		const desc_ = document.getElementById("Descrption").value;
		const aut_ = document.getElementById("Auteur").value;
		const edi_ = document.getElementById("ISBN").value;
		const cat_ = document.getElementById("Category").value;
		const date = document.getElementById("date").value;

		const book_ = {
			_id: id,
			name: name_,
			desc: desc_,
			isbn: desc_,
			auteur: aut_,
			editeur: edi_,
			date_publication: date,
			category: cat_,
		};
		updateBook(book_);
		navigate("/admin/books");
	}
	return (
		<div className="container">
			<h1> </h1>
			<h3>### Modifier livre</h3>
			<form onSubmit={HundleBook}>
				<table>
					<tr>
						<th>
							<label className={"form-label"} htmlFor={"Nom"}>
								Nom
							</label>
						</th>
						<td>
							<input
								className={"form-control m-3"}
								type="text"
								defaultValue={getBook.name}
								name={"Nom"}
								id={"Nom"}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label className={"form-label"} htmlFor={"Descrption"}>
								Descrption{" "}
							</label>
						</th>
						<td>
							<input
								className={"form-control m-3"}
								type="text"
								id={"Descrption"}
								defaultValue={getBook.desc}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label className={"form-label"} htmlFor={"ISBN"}>
								ISBN{" "}
							</label>
						</th>
						<td>
							<input
								className={"form-control m-3"}
								type="text"
								id={"ISBN"}
								defaultValue={getBook.isbn}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label className={"form-label"} htmlFor={"Auteur"}>
								Auteur{" "}
							</label>
						</th>
						<td>
							<input
								className={"form-control m-3"}
								type="text"
								id={"Auteur"}
								defaultValue={getBook.auteur}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label className={"form-label"} htmlFor={"Editeur"}>
								Editeur{" "}
							</label>
						</th>
						<td>
							<input
								className={"form-control m-3"}
								type="text"
								id={"Editeur"}
								defaultValue={getBook.editeur}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label className={"form-label"} htmlFor={"date"}>
								Date pub{" "}
							</label>
						</th>
						<td>
							<input
								className={"form-control m-3"}
								type="datetime-local"
								id={"date"}
								defaultValue={getBook.date_publication}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label className={"form-label"} htmlFor={"Category"}>
								Category{" "}
							</label>
						</th>
						<td>
							<Form.Select
								className={"form-control m-3"}
								aria-label="Default select example"
								id={"Category"}
							>
								{cats.map((item, index) =>
									item._id === getBook.category ? (
										<option selected value={item._id}>
											{" "}
											{item.name}
										</option>
									) : (
										<option value={item._id}> {item.name}</option>
									)
								)}
							</Form.Select>
						</td>
					</tr>
					<tr>
						<td>
							<input
								type="submit"
								id="sub"
								value={"Enregistrer"}
								className="mr-3 btn btn-success"
							/>
						</td>
						<td>
							<input
								id="can"
								type="reset"
								value={"Annuler"}
								className=" m-3 btn btn-danger"
							/>
						</td>
					</tr>
				</table>
			</form>
		</div>
	);
}
