'use strict';
var client = require('../helper/es');
module.exports {
	GetAllTodos : GetAllTodos	
};

function GetAllTodos(req, res) {
	client.search({
		index:'todo',
		type:'todo',
		q: '*',
		_sourceInclude: 'todo_id, todo, completed, tags, author, completeddate, duedate'
	},
		function(error,response){
			if(error){
				res.end(JSON.stringify(error))
			} else {
				
			}
		})
}