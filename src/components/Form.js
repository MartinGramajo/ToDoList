import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = ({ input, setInput, todos, setTodos }) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault()
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
        setInput("");
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
                type="submit"> <FontAwesomeIcon icon={faPlus } /></button>
        </form>
    )
}

export default Form
