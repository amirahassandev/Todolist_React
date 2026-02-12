import logo from './logo.svg';
import './App.css';
import Todolist from './Components/todolist';
import './Styles/style.css'
// import { TodosContext } from './Contexts/TodosContext';
// import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { ToastProvider } from './Contexts/ToastContext';
import TodosProvider from './Contexts/TodosContext';


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


function App() {
  // const [todo, setTodo] = useState([]);


  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <ToastProvider>
          <div className="App" style={{backgroundColor: "#19161f", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <Todolist/>
          </div>
        </ToastProvider>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
