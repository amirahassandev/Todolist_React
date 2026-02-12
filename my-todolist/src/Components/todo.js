
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import '../Styles/style.css'
import { useContext } from 'react';
import { TodosContext } from '../Contexts/TodosContext';
import { useToast } from '../Contexts/ToastContext';




export default function Todo({todoContent, openDeletePopup, openUpdatePopup, setSelectedTodo}){
    const {todos, dispatch} = useContext(TodosContext)
    const {showHideToast} = useToast()

    function HandleCheckClick(){        
        dispatch({type: "Check", payload: todoContent})
        showHideToast(todoContent.isCompleted ? "Un-Completed": "Completed") 

    }


    function HandleDeleteClick(){
        setSelectedTodo(todoContent);
        openDeletePopup(true)
    }

    function HandleUpdateClick(){
        setSelectedTodo(todoContent);
        openUpdatePopup(true)
    }
    


    return (
        <>   
        <Card style={{maxWidth: "100%", backgroundColor: "#06064c", display: "flex", padding: "0 20px", justifyContent: "space-between"}} className='todoCard'>
            <CardContent>
                <p style={{color: "white", fontSize: "14px", textDecoration: todoContent.isCompleted? "line-through" : "none" }}>{todoContent.title}</p>
                <Typography variant="body2" sx={{ color: '#ffffffe3', fontSize: "12px"}}>
                  {todoContent.details}
                </Typography>
            </CardContent>
            <CardActions>
                <CheckOutlinedIcon onClick={(e) => HandleCheckClick()} style={ {color: todoContent.isCompleted? "white" : "rgba(0, 128, 0, 0.88)" , backgroundColor: todoContent.isCompleted? "rgba(0, 128, 0, 0.88)" : "white" ,border: "1px rgba(0, 128, 0, 0.88) solid"}} className="icons" />
                <EditOutlinedIcon onClick={(e) => HandleUpdateClick()} className="icons" style={{color: "blue", border: "1px solid blue"}} />
                <DeleteOutlineOutlinedIcon onClick={(e) => HandleDeleteClick()} className="icons" style={{color: "red", border: "1px red solid"}}/>
            </CardActions>
            
        </Card>
        </>
        
    )
}
