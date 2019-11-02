const express = require ("express")
const router = express.Router()
const controller = require("../controllers/toDoListController")

router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/:nomeColaborador/buscar", controller.getColaborator)
router.get("/concluidos/filtrar", controller.getByStatus)
router.get("/data/filtrar", controller.getByDate)

module.exports = router