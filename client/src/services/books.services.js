import http from "./http-common";

const getBooks = async () => await http.get("/books");

const getBookById = async (id) => await http.get(`/books/${id}`);

const deleteBook = async (id) => await http.delete(`/books/${id}`);

const addBook = async (book) => await http.post("/books", book);

const updateBook = async (book) => await http.put(`/books/${book.id}`, book);

export { getBooks, getBookById, deleteBook, addBook, updateBook };
