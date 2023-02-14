import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = (props) => {
	const [taskName, setTaskName] = useState("");

	const handleTaskNameChange = (event) => {
		setTaskName(event.target.value);
	};

	const handleAddTask = () => {
		if (taskName.trim() !== "") {
			const newTask = {
				id: uuidv4(),
				name: taskName,
				completed: false,
			};

			setTaskName("");
			props.onAddTask(newTask);
		}
	};

	return (
		<div className="add-task-form">
			<input
				type="text"
				placeholder="Digite uma tarefa"
				value={taskName}
				onChange={handleTaskNameChange}
			/>
			<button onClick={handleAddTask}>Adicionar</button>
		</div>
	);
};

export default AddTaskForm;
