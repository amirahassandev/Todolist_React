import logo from './logo.svg';
import './App.css';
import Todolist from './todolist';
import './style.css'
import { v4 as uuidv4 } from 'uuid';
import { ContextTodos } from './Contexts/ContextTodos';
import { useState } from 'react';

const initialTodoList = [
    {
        id: uuidv4(),
        title: "title 1",
        details: "details of todo 1",
        isCompleted: false
    },
    {
        id: uuidv4(),
        title: "title2",
        details: "details of todo 2",
        isCompleted: false
    }
  ]



function App() {
  const [todo, setTodo] = useState(initialTodoList);

  return (
    <div className="App" style={{backgroundColor: "#19161f", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center"}}>
      <ContextTodos.Provider value={{todo, setTodo}}>
          <Todolist />
      </ContextTodos.Provider>
    </div>
  );
}

export default App;
