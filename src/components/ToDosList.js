import { faCheckCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const handleChange = (e) => {
    e.prevent.default();
}



const ToDosList = ({ todos, setTodos, setEditTodo }) => {
    /*funcion para borrar un item con filter*/ 
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    /*con esta funcion le damos subrayado nos devulve un booleano en base a eso jugamos con el css*/ 
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    /*Funcion para editar el input*/
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

return (
    <div>
        {todos.map((todo) => (
            <li className="list-item" key={todo.id}>
                <input
                    type="text"
                    value={todo.title}
                    className="list"
                    onChange={handleChange}
                />
                <div>
                    <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                        <FontAwesomeIcon icon={faCheckCircle} /></button>
                    <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                        <FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </li>
        ))}
    </div>
)
}

export default ToDosList
