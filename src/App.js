import React from 'react';
import {useState} from "react";
import Todo from "./components/Todo.js";
import Form from "./components/Form.js";
import {nanoid} from "nanoid";





function App(props) {
	const [tasks, setTasks]=useState(props.tasks);

	function addTask(name){
		const newTask = {id: "todo-"+nanoid(), name: name, completed: false};
		setTasks([...tasks, newTask]);
	}

	// This function will keep track if a task is checked or unchecked.
	function toggleTaskCompleted(id){
		console.log(tasks);
		const updatedTask = tasks.map( (task)=>{
			if (id===task.id){
				return {...task, completed: !task.completed }
			}
			return task;
		} )
		setTasks(updatedTask);
	}



	// This function will delete a task
	function deleteTask(id) {
	  //console.log(id)
	  const remainingTasks = tasks.filter( (task)=>{ return id !== task.id} );

	  setTasks(remainingTasks);
	}

	// This function will edit a task
	function editTask(id, newName){
		const editedTaskList = tasks.map( (task)=>{
			if (id === task.id){
				return {...task, name: newName}
			}
			return task;
		} );
		setTasks(editedTaskList);
	}


	//console.log("props.tasks",props.tasks);
	const taskList = tasks.map((task) => (
	  <Todo
	  id={task.id}
	  name={task.name}
	  completed={task.completed}
	  key={task.id}
	  toggleTaskCompleted={toggleTaskCompleted}
	  deleteTask={deleteTask}
	  editTask={editTask}
	  />
));
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
