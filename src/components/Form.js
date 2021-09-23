import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    /*funcion para editar y actualizar*/
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => (
            todo.id === id ? { title, id, completed } : todo
        ))
        setTodos(newTodo);
        setEditTodo("");
    }
    /*usuamos el useEffect para modificar el item de la lista en el input y volver a guardar*/ 
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput('')
        }
    }, [setInput, editTodo])

    /* funcion para capturar lo que se escribe en el input*/
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    /*funcion submit para listar y editar*/
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    };
    return (
        <form onSubmit={onFormSubmit}>
            <input
                className="task-input"
                type="text"
                placeholder="Ingresa la tarea..."
                value={input}
                required
                onChange={onInputChange}
            />
            <button
                className="button-add"
                type="submit">{editTodo ? <FontAwesomeIcon icon={faEdit} />: <FontAwesomeIcon icon={faPlus} />} </button>
        </form>
    )
}

export default Form
