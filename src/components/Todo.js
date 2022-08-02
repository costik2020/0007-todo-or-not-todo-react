import React from "react";

function Todo(props){
	//console.log("props.completed=",props.completed);
	return(
		<li id={props.id}>
			<div className="star">
				<input type="checkbox" defaultChecked={props.completed} name='little-star' id='star-btn' />
				<label htmlFor='star-btn'></label>
			</div>
			<div className="item">{props.name}</div>
			<div
			className="edit"
			onClick={()=>{alert("hy")}}
			>
			</div>
			<div className="remove"></div>
		</li>
	);
}

//<div className="star completed-{props.completed}"></div>

export default Todo;