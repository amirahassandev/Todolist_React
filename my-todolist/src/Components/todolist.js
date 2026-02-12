import { useEffect, useMemo, useReducer, useState } from 'react';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Todo from './todo';
import Grid from '@mui/material/Grid';
// import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';

import '../Styles/style.css'
import { TodosContext } from '../Contexts/TodosContext';
import DeleteTodo from '../Popups/DeleteTodo';
import UpdateTodo from '../Popups/UpdateTodo';
import { useToast } from '../Contexts/ToastContext';


export default function Todolist(){
    const {todos, dispatch} = useContext(TodosContext)
    const {showHideToast} = useToast()
    
    const [showTypeTodo, setShowTypeTodo] = useState('all');
    const [titleInput, setTitleInput] = useState("");
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false)


    const handleChange = (e) => {
        setShowTypeTodo(e.target.value);
    };

    function handleAddClick(){
        if(titleInput != ""){
            dispatch({type: "Added", payload: {title: titleInput}})
            setTitleInput("")
            showHideToast("Added Successfully")
        }
    }

    useEffect(() => {
        dispatch({type: "Get"})
    }, [])

    const filterCompleted = useMemo(() => {
        return todos.filter((t) => {
            // console.log("Completed")
            return t.isCompleted
        }); 
    }, [todos])


    const filterUnCompleted = useMemo(() => {
        return todos.filter((t) => {
            // console.log("unCompleted")
            return !t.isCompleted
        }); 
    }, [todos])


    function TodoListComponent(todoList) {
        if (todoList && todoList.length > 0){
            let todo = todoList;

            if(showTypeTodo == 'completed'){
                todo = filterCompleted
                console.log(todo);
                
            }
            
            else if(showTypeTodo == 'unCompleted'){
                todo = filterUnCompleted
            }
            else{

            }

            const returnTodos = todo.map((t) => (
                <Todo
                    key={t.id}
                    todoContent = {t}
                    openDeletePopup={setShowDeletePopup}
                    openUpdatePopup = {setShowUpdatePopup}
                    setSelectedTodo={setSelectedTodo}
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
        <>
            <DeleteTodo 
                showDeletePopup = {showDeletePopup} 
                setShowDeletePopup = {setShowDeletePopup} 
                todoContent={selectedTodo} 
                dispatch = {dispatch}
            />  

            <UpdateTodo 
                showUpdatePopup = {showUpdatePopup} 
                openUpdatePopup = {setShowUpdatePopup} 
                todoContent = {selectedTodo} 
                dispatch = {dispatch}
            />   

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
                    {TodoListComponent(todos)}
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
    </>
  );
}