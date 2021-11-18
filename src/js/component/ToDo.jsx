import React, { useEffect, useState } from "react";

//TO DO LIST WITH REACT

function ToDo() {
	//useStates
	const [tasks, setTasks] = useState([]); //tasks list
	const [task, setTask] = useState(""); //single task
	//const [xButton, setxButton] = useState(-1); //the x to delete tasks

	//Functions
	const handleTask = event => {
		setTask(event.target.value);
	};
	const handleSubmit = event => {
		event.preventDefault();
	};
	const handleKeyPress = event => {
		if (event.key == "Enter") {
			if (task != "") {
				setTasks([...tasks, event.target.value]);
				setTask("");
			}
		}
	};
	const handleDeleteTask = id => {
		const newToDo = tasks.filter((task, index) => index != id);
		setTasks(newToDo);
	};

	//Body
	return (
		<div className="container">
			<div className="row justify-content-center mt-2">
				<div className="col-12 col-md-6">
					<h1>
						<strong> To do list </strong>
					</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							className="form-control"
							placeholder="What needs to be done?"
							onChange={handleTask}
							onKeyPress={handleKeyPress}
							value={task}
						/>
					</form>
				</div>
			</div>
			<div className="row justify-content-center" id="tasksBox">
				<div className="col-12 col-md-6">
					<ul>
						{tasks.map((task, index) => {
							return (
								<li
									key={index}
									onClick={() => handleDeleteTask(index)}>
									{task}
									<i className="fas fa-check myIcon"></i>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="row justify-content-center" id="taskCounter">
					{tasks.length == 1
						? `${tasks.length} item left`
						: `${tasks.length} items left`}
				</div>
			</div>
		</div>
	);
}

export default ToDo;
