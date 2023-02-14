import React from "react";
import Task from "./Task";

const TaskList = (props) => {
	return (
		<div>
			{props.tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDeleteTask={props.onDeleteTask}
					onToggleTask={props.onToggleTask}
				/>
			))}
		</div>
	);
};

export default TaskList;
