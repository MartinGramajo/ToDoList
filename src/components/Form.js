import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos }) => {

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.prevent.default();
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
        setInput("");

    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                className="task-input"
                type="text"
                placeholder="Enter a Todo..."
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    )
}

export default Form
