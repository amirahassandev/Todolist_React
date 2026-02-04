import { useState } from 'react';
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
    const [alignment, setAlignment] = useState('all');
    const [titleInput, setTitleInput] = useState("");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    function handleAddClick(){
        const newTodo = {
            id: uuidv4(),
            title: titleInput,
            details: "",
            isCompleted: false
        }
        setTodo([...todo, newTodo])
        setTitleInput("")
    }

    function HandleCheckClick(todoId){
        let updateTodo = todo.map((t) => {
            if(t.id == todoId){
                t.isCompleted = true
            }
            return t
        })
        setTodo(updateTodo)
    }

    function TodoListComponent(todoList) {
        if (todoList && todoList.length > 0) {
            const todos = todoList.map((t) => (
                <Todo
                    key={t.id}
                    // title={todo.title}
                    // details={todo.details}
                    // isCompleted={todo.isCompleted}
                    todo = {t}
                    handleClick = {HandleCheckClick}
                />
            ));
            return <>{todos}</>
        }

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


    return (
      <Container maxWidth="sm" style={{backgroundColor: "white", height: "fit-content", paddingBottom: "30px", borderRadius: "10px"}}>
        <h2 style={{padding: "20px 0", fontWeight: "bold", fontSize: "40px"}}>My TodoList :)</h2>
        <hr orientation="vertical" variant="middle" flexItem />

        <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            style={{margin: "20px 0"}}
            >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="finish">Finish</ToggleButton>
            <ToggleButton value="unfinish">unfinish</ToggleButton>
        </ToggleButtonGroup>


        <div style={{display:"flex", flexDirection: "column", gap: "10px"}}>
            {TodoListComponent(todo)}
        </div>


        <Grid container spacing={2} style={{marginTop: "30px"}}>
            <Grid size={{ xs: 6, md: 4 }}>
                <Button className='btn' onClick={() => handleAddClick()}>Add</Button>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
                <TextField value={titleInput} onChange={(e) => setTitleInput(e.target.value)} style={{width: "100%"}} id="outlined-basic" label="A mission title" variant="outlined" />
            </Grid>
        </Grid>

      </Container>
  );
}