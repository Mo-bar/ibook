const express = require("express");
const router = express.Router()
const catController = require("../controllers/catalogue.controller")

router.get("/", catController.users)
router.get("/:id", catController.user)
router.post("/", catController.addUser)


module.exports = router