
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
    const [AtodoContent, setTodoContent] = useState(todoContent)

    function HandleUpdateTask(){
        // setTodo(todo.filter(t => t.id != todoContent.id))
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
                <input value={AtodoContent.title} />
                <br />
                <label>Details</label>
                <input value={AtodoContent.details} />
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