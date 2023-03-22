const express = require("express");
const router = express.Router()
const catController = require("../controllers/catalogue.controller")

router.route("/").get(catController.getCategories).post(catController.addCategory)

router.route("/:id").delete(catController.deleteCategory)

module.exports = router
