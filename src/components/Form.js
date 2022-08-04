import React from "react";
import {useState} from "react";




function Form(props){

	// The useState function returns an array of 2 things, which is the state and a function to update the state.
	// We will destructure these two things that the hook function returns into name variable and setName variable (which techincally is a expresion of a function..)
	const [name, setName] = useState("");

	function handleSubmit(e){
		e.preventDefault();
		props.addTask(name);
		setName("");
	}

	function handleChange(e){
		console.log(e.target.value);
		setName(e.target.value);
		//console.log("name=",name);
	}

	return(
		<form onSubmit={handleSubmit}>
			<input
			type="text"
			value={name}
			onChange={handleChange}
			placeholder="Add item..."
			></input>
			<button className="add-button">ADD</button>
		</form>
	);
}


export default Form;



