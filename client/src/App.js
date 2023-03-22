import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/admin.space/admin.layout";
import Booklist from "./components/admin.space/book.list.compo";
import Newbook from "./components/admin.space/new.book.compo";
import { Editbook } from "./components/admin.space/edit.book.compo";
import ClientLayout from "./components/client.space/client.layout";
import _Booklist from "./components/client.space/book.list";

function App() {
	return (
		<>
			<Routes>
				<Route path={"/admin"} element={<AdminLayout />}>
					<Route path={"books"} element={<Booklist />} />
					<Route path={"books/new"} element={<Newbook />} />
					<Route path={"books/edit/:id"} element={<Editbook />} />
				</Route>
				<Route path={"/"} element={<ClientLayout />}>
					<Route path={"books"} element={<_Booklist />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
