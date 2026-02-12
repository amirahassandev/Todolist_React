
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { useContext, useReducer } from 'react';
// import { TodosContext } from '../Contexts/TodosContext';
import { useToast } from '../Contexts/ToastContext';


export default function DeleteTodo({showDeletePopup, setShowDeletePopup, todoContent, dispatch}){
    const {showHideToast} = useToast()
    

    function HandleRemoveTask(){
        dispatch({type: "Deleted", payload: {id: todoContent.id}})
        setShowDeletePopup(false)
        showHideToast("Deleted Successfully")
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