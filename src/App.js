import React, { useState } from 'react'
import Form from './components/form';
import TodoList from './components/toDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
        <header>
          <h1>To do list: </h1>
          <br />
          <Form
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText} />
        </header>
        <main>
          <TodoList 
          setTodos={setTodos}
          todos={todos} 
          />
        </main>
    </div>
  );
}

export default App;
