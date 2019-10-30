const express = require("express")
const router = express.Router()
const controller = require("../controllers/toDoListController")

router.get("/", (req, res) => {
    res.status(200).send({
        title: "Minha primeira API <3",
    })
})

module.exports = router