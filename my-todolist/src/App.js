import logo from './logo.svg';
import './App.css';
import Todolist from './todolist';
import './style.css'
import { v4 as uuidv4 } from 'uuid';
import { ContextTodos } from './Contexts/ContextTodos';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography:{
    fontFamily: ["todofont"]
  },
  palette:{
    primary: {
      main: "#388e3c",
      dark: "#1b5e20"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#a5d6a7",
            color: "#f5f5f5",         
            opacity: 0.7,
            cursor: "not-allowed"
          }
        }
      }
    }
  }
})

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
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundColor: "#19161f", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center"}}>
        <ContextTodos.Provider value={{todo, setTodo}}>
            <Todolist />
        </ContextTodos.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
