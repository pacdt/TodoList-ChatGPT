import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [editingTodo, setEditingTodo] = useState(null);

	// Carrega a lista de tarefas do LocalStorage ao montar o componente
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	// Salva a lista de tarefas atual no LocalStorage sempre que ela é atualizada
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// Adiciona uma nova tarefa à lista
	function addTodo(todo) {
		setTodos([...todos, todo]);
	}

	// Marca uma tarefa como concluída
	function completeTodo(id) {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	}

	// Remove uma tarefa da lista
	function deleteTodo(id) {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	}

	// Define a tarefa atual em edição
	function editTodo(id) {
		const todo = todos.find((todo) => todo.id === id);
		setEditingTodo(todo);
	}

	// Atualiza uma tarefa existente
	function updateTodo(updatedTodo) {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === updatedTodo.id) {
				return updatedTodo;
			}
			return todo;
		});
		setTodos(updatedTodos);
		setEditingTodo(null);
	}

	return (
		<div>
			<TodoForm
				addTodo={addTodo}
				editingTodo={editingTodo}
				updateTodo={updateTodo}
			/>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					completeTodo={completeTodo}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			))}
		</div>
	);
}

export default TodoList;
