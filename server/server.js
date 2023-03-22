const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express(); // demarage l'application
const catRouter = require("./routers/category.router");
const booksRouter = require("./routers/book.router");
const userRouter = require("./routers/user.router");

app.use(cors());
app.listen(5000, () => {
	console.log("RUNNING ...");
});
// ? create server

// parser les donnee json
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", booksRouter);
app.use("/categories", catRouter);
app.use("/users", userRouter);

require("dotenv").config();
mongoose.connect("mongodb://localhost:27017/ibook_db").catch((err) => console.log(`error : ${err}`)); // ? se connecter a la base de donnee
