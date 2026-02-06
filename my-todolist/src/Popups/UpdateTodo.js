
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from 'react';
import { ContextTodos } from '../Contexts/ContextTodos';


export default function UpdateTodo({showUpdatePopup, setShowUpdatePopup, todoContent}){
    const {todo, setTodo} = useContext(ContextTodos);
    const [UpdateTodo, setUpdateTodo] = useState(todoContent)

    function HandleUpdateTask(){
        const updateTodos = todo.map((t) => {
            if(t.id == UpdateTodo.id){
                return {...t, title: UpdateTodo.title, details: UpdateTodo.details}
            }else{
                return t
            }
        })
        setTodo(updateTodos)
        localStorage.setItem("todo", JSON.stringify(updateTodos))
    }

    function handleClose(){
        setShowUpdatePopup(false)
    }

    return(
        <Dialog
            open={showUpdatePopup}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to edit this task?"}
            </DialogTitle>
            <DialogContent>
                <label>Title</label>
                <input value={UpdateTodo.title} onChange={(e) => {setUpdateTodo({...UpdateTodo, title:e.target.value})}} />
                <br />
                <label>Details</label>
                <input value={UpdateTodo.details} onChange={(e) => {setUpdateTodo({...UpdateTodo, details:e.target.value})}} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()}>Close</Button>
                <Button onClick={() => HandleUpdateTask()} autoFocus>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    )
}