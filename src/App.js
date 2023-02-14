import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css'
// import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  function editTodo(id) {
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditingTodo(todoToEdit);
  }

  function updateTodo(updatedTodo) {
    const updatedTodos = todos.map(todo => {
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
      <h1 className='app-title'>Todo List</h1>
      {/* <TodoForm addTodo={addTodo} editingTodo={editingTodo} updateTodo={updateTodo} /> */}
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
