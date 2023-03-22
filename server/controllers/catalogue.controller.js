const catService = require("../services/catalogue.services")

const getBooks = async (req, res) => {
    try {
        const books = await catService.getAllBooks()
        res.status(200).json(books)
    } catch (err) {
        res.status(500).json("Invalid opration ")
    }
}

const getBook = async (req, res) => {
    try {
        const book = await catService.getBookById(req.params.id)
        res.status(200).json(book)
    } catch (err) {
        console.log(err);
        res.status(500).json("Invalid opration ")
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await catService.deleteBookById(req.params.id)
        res.status(200).json("Supression bien fait!")
        console.log(book)
    } catch (err) {
        res.status(500).json("Invalid opration ")
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await catService.updateBookById(req.body)
        res.status(200).json("Modification bien fait!")
    } catch (err) {
        res.status(500).json("Invalid opration ")
    }
}

const addBook = async (req, res) => {
    try {
        const book = await catService.createBook(req.body)
        res.status(201).json("Insertion bien fait!")
    } catch (err) {
        res.status(500).json(`Error => ${err}`)
    }
}

const addCategory = async (req, res) => {
    try {
        const category = await catService.createCategory(req.body)
        res.status(201).json("Insertion bien fait!")
    } catch (err) {
        res.status(500).json(`Error => ${err}`)
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await catService.getAllCategory()
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json("Invalid opration ")
    }
}

const deleteCategory = async (req, res) => {
    try {
        await catService.deleteCategoryById(req.params.id)
        res.status(200).json("Suppresion bien fait!")
    } catch (err) {
        res.status(500).json("Invalid opration ")
    }
}

const addUser = async (req, res) => {
    try {
        await catService.addUser(req.body)
        res.status(201).json("Insertion bien fait")
    }catch(err){
        res.status(500).json(`Error => ${err}`)
    }
}

const user = async (req, res) => {
    try{
        const getUser = await catService.user(req.params.id)
        res.status(200).json(getUser)
    }catch(err){
        res.status(500).json(`Error => ${err}`)
    }
}
const users = async (req, res) => {
    try{
        const getUsers = await catService.users()
        res.status(200).json(getUsers)
    }catch(err){
        res.status(500).json(`Error => ${err}`)
    }
}

module.exports = {
    getBooks,
    getBook,
    deleteBook,
    updateBook,
    addBook,
    addCategory,
    getCategories,
    deleteCategory,
    addUser,
    user,
    users
}
