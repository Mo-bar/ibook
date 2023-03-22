const Books = require("../models/book");
const Category = require("../models/category");
const User = require("../models/user")
const bcrypt = require("bcrypt")

// ? Book CRUD
const getAllBooks = async () => await Books.find();

const createBook = async (bk) => await Books.create(bk);

const getBookById = async (id) => await Books.findById(id)

const deleteBookById = async (id) => await Books.findByIdAndDelete(id)

const updateBookById = async (newbook) => await Books.findByIdAndUpdate(newbook._id, newbook)

// ? Category CRUD
const getAllCategory = async () => await Category.find()

const createCategory = async (cat) => await Category.create(cat)

const deleteCategoryById = async (id) => await Category.findByIdAndDelete(id)

// ? user
const addUser = async (usr) => {
    const salt = await bcrypt.genSalt()
    console.log(usr);
    usr.passwd = await bcrypt.hash(usr.passwd,salt)
    console.log(usr);
    return await User.create(usr)
}

const user = async (id) => await User.findById(id)

const users = async () => await User.find()

module.exports = {
    getAllBooks,
    createBook,
    getBookById,
    deleteBookById,
    updateBookById,
    getAllCategory,
    createCategory,
    deleteCategoryById,
    addUser,
    user,
    users
}
