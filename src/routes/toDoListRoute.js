const express = require ("express")
const router = express.Router()
const controller = require("../controllers/toDoListController")

router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/:nomeColaborador/buscar", controller.getElementById)
router.get("/concluidos/filtrar", controller.getByStatus)

module.exports = router