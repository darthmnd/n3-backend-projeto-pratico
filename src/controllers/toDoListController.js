const list = require ("../model/toDoList.json")

//exibe mensagem inicial da API
exports.get = (req, res) => {
const controllerList = list.map(itens => {
    itens.id >= 1
    return itens
})
res.status(200).send(controllerList)
}

//filtrar por id do colaborador
exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 3 || id <=0){
        res.redirect(301, "https://http.cat/400")
    }
    res.status(200).send(list.find(listId => listId.id == id))
}

//filtrar por nome do colaborador
exports.getColaborator = (req, res) => {
    const collaboratorList = req.params.nomeColaborador
    res.status(200).send(list.filter(listName => listName.nomeColaborador == collaboratorList))
}

//filtrar por tarefas concluídas
exports.getByStatus = (req, res) => {
    const taskDone = list.filter(doneId => doneId.concluido == true)
    res.status(200).send(taskDone)
}

//transformar string em data
function dateString(date) {
    const splitDt = date.split("/")
    const splitDate = splitDt[1] + '-' + splitDt[0] + '-' + splitDt[2]
    const finalDate = new Date(splitDate)
    return finalDate
}

//ordenar datas da menor ocorrência para a maior
exports.getByDate = (req, res) => {
    const dateList = list.sort((a,b) =>{
        if (dateString(a.dataInclusao) < dateString(b.dataInclusao)){
            return 1
        } if (dateString(a.dataInclusao) > dateString(b.dataInclusao)){
            return -1
        }
        return 0
    })
    res.send(dateList)
}
   
