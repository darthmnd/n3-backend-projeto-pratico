const list = require ("../model/toDoList.json")

exports.get = (req, res) => {
const controllerList = list.map (itens => {
    itens.id >= 1
    return itens
})

res.status(200).send(controllerList)
}

exports.getById = (req, res) => {
    const id = req.params.id
    res.status(200).send(list.find(listId => listId.id == id))
}