'use string';

module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res, next) {
    res.json([{
        todo_id: 0,
        todo: "Get some milk",
        author: "Jim",
        createddate: "2016-11-9T23:15:00.000Z",
        duedate: "2016-12-01T17:00:00.000Z",
        completed: false
    }, {
        todo_id: 1,
        todo: "Get some boss",
        author: "Jim",
        createddate: "2016-11-9T23:15:00.000Z",
        duedate: "2016-12-01T17:00:00.000Z",
        completed: false
    }])
}