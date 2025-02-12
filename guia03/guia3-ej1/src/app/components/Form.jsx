"use client"
import React, { useState } from 'react'
import Todo from './Todo'
import styles from "../page.module.css";

const Form = () => {
  const [todos, setTodos] = useState([
    { todo: 'todo 1' },
    { todo: 'todo 2' },
    { todo: 'todo 3' }
  ]);

  const [todo, setTodo] = useState({ todo: '' }); // Estado separado para la entrada

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (todo.todo.trim() === '') {
      alert('El campo no puede estar vacío');
      return;
    }
    setTodos([...todos, todo]); // Agregar nueva tarea al array
    setTodo({ todo: '' }); // Limpiar el input
  };

  const deleteTodo = (indice) => {
    const newTodos = [...todos];
    newTodos.splice(indice, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar Tarea </label><br />
        <input 
          className={styles.form_input} 
          type="text" 
          name="todo" 
          value={todo.todo} 
          onChange={handleChange} 
        />
        <button 
          className={styles.form_button} 
          onClick={handleClick}
        >
          Agregar
        </button>
      </form>    

      {todos.map((value, index) => (
        <Todo key={index} todo={value.todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </>
  );
}

export default Form;
