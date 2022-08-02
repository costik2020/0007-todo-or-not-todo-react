import React from 'react';
import {useState} from "react";
import Todo from "./components/Todo.js";
import Form from "./components/Form.js";




function App(props) {
	const [tasks, setTasks]=useState(props.tasks);
	function addTask(name){
		const newTask = {id: "id", name: name, completed: false};
		setTasks([...tasks, newTask]);
	}

	//console.log("props.tasks",props.tasks);
	const taskList = tasks.map((task) =>
	  <Todo
	  id={task.id}
	  name={task.name}
	  completed={task.completed}
	  key={task.id}
	  />
);
//console.log("taskList=",taskList);

  return (
    <div className="todo-app">
		<h1>TODOS</h1>
		<Form addTask={addTask} />
		<div className="items-stack">
			<ul>
				{taskList}
			</ul>
		</div>

	</div>
  );
}



export default App;
