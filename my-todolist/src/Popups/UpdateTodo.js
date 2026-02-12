
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
// import { TodosContext } from '../Contexts/TodosContext';
import { useToast } from '../Contexts/ToastContext';


export default function UpdateTodo({showUpdatePopup, openUpdatePopup, todoContent, dispatch}){
    const {showHideToast} = useToast()
    const [UpdateTodo, setUpdateTodo] = useState(
        {
            id: "",
            title: "",
            details: ""
        }
    )

    useEffect(() => {
        if (todoContent) {
            setUpdateTodo(todoContent);
        }
    }, [todoContent]);

    function HandleUpdateTask(){
        dispatch({type: "Updated", payload: UpdateTodo})
        openUpdatePopup(false)
        showHideToast("Updated Successfully")
    }

    function handleClose(){
        openUpdatePopup(false)
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