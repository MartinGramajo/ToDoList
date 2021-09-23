import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import { useState } from 'react'

const App = () => {

  //State del input
  const [input, setInput] = useState("");

  //State lista de to do
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input} //pasamos el state por props
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}

          />

        </div>

      </div>
    </div>
  );
}

export default App;
