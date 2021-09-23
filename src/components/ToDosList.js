import React from 'react'

const handleChange = (e) => {
    e.prevent.default();
}

const ToDosList = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={handleChange}
                    />
                </li>
            ))}
        </div>
    )
}

export default ToDosList
