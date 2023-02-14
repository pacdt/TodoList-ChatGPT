import React, { useState } from "react";
import '../TodoForm.css'

const TodoForm = ({ addTodo }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		addTodo({
			id: Date.now(),
			title,
			description,
		});
		setTitle("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit} className="todo-form">
			<div className="form-row">
				<div className="form-col">
					<label htmlFor="title" className="form-label">
						Tarefa
					</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
						className="form-input"
						required
					/>
				</div>
				<div className="form-col">
					<label htmlFor="description" className="form-label">
						Descrição
					</label>
					<textarea
						id="description"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						className="form-textarea"
						required
					/>
				</div>
				<div className="form-col">
					<button type="submit" className="form-button">
						Adicionar
					</button>
				</div>
			</div>
		</form>
	);
};

export default TodoForm;
