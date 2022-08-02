import React from 'react';
import Todo from "./components/Todo.js";


function App(props) {
  return (
    <div className="todo-app">
		<h1>TODOS</h1>
		<form>
			<input type="text"></input>
			<button>ADD</button>
		</form>
		<div className="items-stack">
			<ul>
				<Todo name="item1" completed={false} />
				<Todo name="item2" completed={true} />
				<Todo name="item3" completed={false} />
				<Todo name="item4" completed={false} />

			</ul>
		</div>

	</div>
  );
}



export default App;
