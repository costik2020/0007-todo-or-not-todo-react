import React from "react";

function Todo(props){
	//console.log("props.completed=",props.completed);
	return(
		<li id={props.id}>
			<div className="star">
				<input
				type="checkbox"
				defaultChecked={props.completed}
				name='little-star'
				id='star-btn'
				onChange={()=>{
					props.toggleTaskCompleted(props.id)
				}}
				/>
				<label htmlFor='star-btn'></label>
			</div>
			<div className="item">{props.name}</div>
			<div
			className="edit"
			onClick={()=>{alert("hy")}}
			>
			</div>
			<div
			className="remove"
			onClick={()=>{props.deleteTask(props.id)}}
			></div>
		</li>
	);
}

//<div className="star completed-{props.completed}"></div>

export default Todo;