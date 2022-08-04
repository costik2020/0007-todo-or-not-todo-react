import React from "react";
import {useState} from "react";


function Todo(props){
	//console.log("props.completed=",props.completed);

	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState("");

	// Have 2 templates
	// -The view template
	// -The edit template

	function handleChange(e){
		setNewName(e.target.value);
	}

	function handleEdit(e) {
	  //e.preventDefault();
	  if (!(newName === "")){
		  props.editTask(props.id, newName);
	  }

	  //setNewName("");
	  //setEditing(false);
	}


	const viewTemplate = (
		<li
		className={"star-is-"+ props.completed + " pen-edit-is-"+isEditing }
		id={props.id}>
		<div
		className="star"
		onClick={()=>{
			props.toggleTaskCompleted(props.id)
		}}
		>

		</div>
			<div className="item-above">
			<div className="item">{props.name}</div>
			</div>
			<div
			className="edit"
			onClick={()=>{ setEditing(!isEditing);  }}
			>
			</div>
			<div
			className="remove"
			onClick={()=>{props.deleteTask(props.id)}}
			></div>
		</li>
	);

	const editTemplate = (
		<li
		className={"star-is-"+ props.completed + " pen-edit-is-"+isEditing }
		id={props.id}>
			<div
			className="star"
			onClick={()=>{
				props.toggleTaskCompleted(props.id)
			}}
			>

			</div>
			<div className="item-above">
			<div className="item">
				<input
				id={props.id}
				className="edit-item"
				value={newName}
				onChange={handleChange}
				/>
			</div>
			</div>
			<div
			className="edit"
			onClick={()=>{ setEditing(!isEditing); handleEdit() }}

			>
			</div>
			<div
			className="remove"
			onClick={()=>{props.deleteTask(props.id)}}
			></div>
		</li>
	);

	return isEditing ? editTemplate : viewTemplate;
}

//<div className="star completed-{props.completed}"></div>

export default Todo;