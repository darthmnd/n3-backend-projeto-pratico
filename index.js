const express = require('express');
const server = express();
const toDo = ['teste', 'teste1', 'teste2']

server.get('/',(req, res) => {
    res.json("Olá!");
});

server.get('/tarefas', (req, res)=> {
    res.json(toDo);
});

server.get(`/tarefas/:id`,(req, res) => {
    const toDoId = req.params.id
    res.json(toDo[toDoId]);
});

server.listen(3000);