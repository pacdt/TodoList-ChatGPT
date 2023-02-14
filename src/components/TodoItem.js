import React from "react";
import '../TodoItem.css'

function TodoItem({ todo, completeTodo, deleteTodo, editTodo }) {
	function handleComplete() {
		completeTodo(todo.id);
	}

	function handleDelete() {
		deleteTodo(todo.id);
	}

	function handleEdit() {
		editTodo(todo.id);
	}

	return (
		<div className="todo-item">
			<div className="todo-item-checkbox">
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={handleComplete}
				/>
			</div>
			<div className="todo-item-content">{todo.title}</div>
			<div className="todo-item-description">{todo.description}</div>
			<div className="todo-item-buttons">
			<i className="fas fa-trash-alt" onClick={handleDelete}></i>
			<i className="fas fa-edit" onClick={handleEdit}></i>
			</div>
		</div>
	);
}

export default TodoItem;
