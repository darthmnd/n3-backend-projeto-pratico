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

exports.getElementById = (req, res) => {
    const collaboratorList = req.params.nomeColaborador
    res.status(200).send(list.filter(listName => listName.nomeColaborador == collaboratorList))
}

exports.getByStatus = (req, res) => {
    const taskDone = list.filter(doneId => doneId.concluido == true)
    res.status(200).send(taskDone)
}