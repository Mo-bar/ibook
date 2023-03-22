const express = require("express");
const router = express.Router()

const catController = require("../controllers/catalogue.controller")

router.get("/", catController.getBooks)
router.post("/", catController.addBook)
router.put("/:id", catController.updateBook)
router.delete("/:id", catController.deleteBook)
router.get("/:id", catController.getBook)

module.exports = router
