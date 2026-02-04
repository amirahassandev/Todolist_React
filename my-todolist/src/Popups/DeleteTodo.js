
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from 'react';
import { ContextTodos } from '../Contexts/ContextTodos';


export default function DeleteTodo({showDeletePopup, setShowDeletePopup, todoContent}){
    const {todo, setTodo} = useContext(ContextTodos);

    function HandleRemoveTask(){
        setTodo(todo.filter(t => t.id != todoContent.id))
    }

    function handleClose(){
        setShowDeletePopup(false)
    }

    return(
        <Dialog
            open={showDeletePopup}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete this task?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    If you are sure, you can click the remove button
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()}>Close</Button>
                <Button onClick={() => HandleRemoveTask()} autoFocus>
                    Remove
                </Button>
            </DialogActions>
        </Dialog>
    )
}