import React from 'react';


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
				<li>
					<div className="star">star</div>
					<div className="item">Item one</div>
					<div className="edit">edit</div>
					<div className="remove">remove</div>
				</li>

				<li>
					<div className="star">star</div>
					<div className="item">Item one</div>
					<div className="edit">edit</div>
					<div className="remove">remove</div>
				</li>

				<li>
					<div className="star">star</div>
					<div className="item">Item one</div>
					<div className="edit">edit</div>
					<div className="remove">remove</div>
				</li>

				<li>
					<div className="star">star</div>
					<div className="item">Item one</div>
					<div className="edit">edit</div>
					<div className="remove">remove</div>
				</li>
				
			</ul>
		</div>

	</div>
  );
}



export default App;
