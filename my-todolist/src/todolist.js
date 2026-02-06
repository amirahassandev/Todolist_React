import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Todo from './todo';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';

import './style.css'
import { ContextTodos } from './Contexts/ContextTodos';



export default function Todolist(){
    const {todo, setTodo} = useContext(ContextTodos)
    const [showTypeTodo, setShowTypeTodo] = useState('all');
    const [titleInput, setTitleInput] = useState("");

    const handleChange = (e) => {
        setShowTypeTodo(e.target.value);
    };

    function handleAddClick(){
        if(titleInput != ""){
            const newTodo = {
                id: uuidv4(),
                title: titleInput,
                details: "",
                isCompleted: false
            }
            const updateTodos = [...todo, newTodo]
            setTodo(updateTodos)
            localStorage.setItem("todo", JSON.stringify(updateTodos))
            setTitleInput("")
        }
    }

    useEffect(() => {
        const todosStorage = JSON.parse(localStorage.getItem("todo"))
        if (todosStorage) {
            setTodo(todosStorage)
        }
    }, [])

    function TodoListComponent(todoList) {
        if (todoList && todoList.length > 0){
            let todos = todoList;

            if(showTypeTodo == 'completed'){
                todos = todoList.filter(t => t.isCompleted)
            }

            else if(showTypeTodo == 'unCompleted'){
                todos = todoList.filter(t => !t.isCompleted)
            }

            else{

            }

            const returnTodos = todos.map((t) => (
                <Todo
                    key={t.id}
                    // title={todo.title}
                    // details={todo.details}
                    // isCompleted={todo.isCompleted}
                    todoContent = {t}
                />
            ));
            return <>{returnTodos}</>
        }

        else{
            return (
                <p style={{ 
                    fontSize: "30px", 
                    color: "green", 
                    fontWeight: "bold" 
                }}>
                    You don't have any task
                </p>
            );
        }
        
    }


    return (
      <Container maxWidth="sm" style={{backgroundColor: "white", height: "fit-content", paddingBottom: "30px", borderRadius: "10px", maxHeight: "80vh", overflow: "scroll"}}>
        <h2 style={{padding: "20px 0", fontWeight: "bold", fontSize: "40px"}}>My TodoList :)</h2>
        <hr orientation="vertical" variant="middle" flexItem />

        <ToggleButtonGroup
            color="primary"
            value={showTypeTodo}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            style={{margin: "20px 0"}}
            >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
            <ToggleButton value="unCompleted">unCompleted</ToggleButton>
        </ToggleButtonGroup>


        <div style={{display:"flex", flexDirection: "column", gap: "10px"}}>
            {TodoListComponent(todo)}
        </div>


        <Grid container spacing={2} style={{marginTop: "30px"}}>
            <Grid size={{ xs: 6, md: 4 }}>
                <Button 
                    className='btn' 
                    onClick={() => handleAddClick()} 
                    variant="contained" 
                    color="primary"
                    disabled = {titleInput.length <= 0}>Add</Button>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
                <TextField value={titleInput} onChange={(e) => setTitleInput(e.target.value)} style={{width: "100%"}} id="outlined-basic" label="A mission title" variant="outlined" />
            </Grid>
        </Grid>

      </Container>
  );
}