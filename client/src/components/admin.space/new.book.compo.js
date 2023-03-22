import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
 import { addBook } from "../../services/books.services";
 import { getCategories } from "../../services/category.servives";
function Newbook() {
	const navigate = useNavigate();
	const [cats, setCats] = useState([{}]);

	useEffect(() => {
		loadData();
	}, []);
	async function loadData() {
		const res = await getCategories();
		setCats(res.data);
	}
	const [Nom, setNom] = useState("");
	const [Desc, setDesc] = useState("");
	const [ISBN, setISBN] = useState("");
	const [Auteur, setAuteur] = useState("");
	const [Editeur, setEditeur] = useState("");
	const [Category, setCategory] = useState("");

	async function sendata(par) {
		par.preventDefault(); //? pour éviter de rafraichir la page
		const book_ = {
			name: Nom,
			desc: Desc,
			isbn: ISBN,
			auteur: Auteur,
			editeur: Editeur,
			category: Category,
		};
		addBook(book_);
		navigate("/admin/books");
	}
	return (
		<div className="container">
			<h1> </h1>
			<h3>### Ajouter nouveau livre</h3>
			<form onSubmit={(ev) => sendata(ev)}>
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
								id={"Nom"}
								onChange={(e) => setNom(e.target.value)}
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
								onChange={(e) => setDesc(e.target.value)}
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
								onChange={(e) => setISBN(e.target.value)}
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
								onChange={(e) => setAuteur(e.target.value)}
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
								onChange={(e) => setEditeur(e.target.value)}
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
								onChange={(e) => setCategory(e.target.value)}
								id={"Category"}
							>
								<option disabled selected>
									{" "}
									Select category
								</option>
								{cats.map((item, index) => (
									<option value={item._id}> {item.name}</option>
								))}
							</Form.Select>
						</td>
					</tr>
					<tr>
						<td>
							<input
								type="submit"
								value={"Enregistrer"}
								className="mr-3 btn btn-success"
							/>
						</td>
						<td>
							<input
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

export default Newbook;
