import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = (props) => {
	const [taskText, setTaskText] = useState("");

	const handleTaskTextChange = (event) => {
		setTaskText(event.target.value);
	};

	const handleAddTaskClick = () => {
		if (taskText.trim() === "") {
			alert("Please enter a task.");
			return;
		}

		const newTask = {
			id: uuidv4(),
			text: taskText,
			isCompleted: false,
		};

		setTaskText("");

		props.onAddTask(newTask);
	};

	return (
		<div>
			<input
				type="text"
				value={taskText}
				onChange={handleTaskTextChange}
			/>
			<button onClick={handleAddTaskClick}>Add Task</button>
		</div>
	);
};

export default AddTaskForm;
