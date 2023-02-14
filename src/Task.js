import React from "react";
// import "./Task.css";

function Task({ task, onToggleTask, onDeleteTask }) {
	return (
		<li className={`Task ${task.completed ? "completed" : ""}`}>
			<label>
				<input
					type="checkbox"
					checked={task.completed}
					onChange={() => onToggleTask(task.id)}
				/>
				{task.title}
			</label>
			<button onClick={() => onDeleteTask(task.id)}>Excluir</button>
		</li>
	);
}

export default Task;
