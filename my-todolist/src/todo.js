
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './style.css'
import { useContext, useState } from 'react';
import { ContextTodos } from './Contexts/ContextTodos';
import DeleteTodo from './Popups/DeleteTodo';
import UpdateTodo from './Popups/UpdateTodo';



export default function Todo({todoContent}){
    const {todo, setTodo} = useContext(ContextTodos)
    const [showDeletePopup, setShowDeletePopup] = useState(false)
    const [showUpdatePopup, setShowUpdatePopup] = useState(false)


    function HandleCheckClick(){
        let updateTodos = todo.map((t) => {
            if(t.id == todoContent.id){
                t.isCompleted = true
            }
            return t
        })
        setTodo(updateTodos)
        localStorage.setItem("todo", JSON.stringify(updateTodos))
    }


    function HandleDeleteClick(){
        setShowDeletePopup(true)
    }

    function HandleUpdateClick(){
        setShowUpdatePopup(true)
    }
    


    return (
        <>   
        <DeleteTodo showDeletePopup = {showDeletePopup} setShowDeletePopup = {setShowDeletePopup} todoContent = {todoContent} />  
        <UpdateTodo showUpdatePopup = {showUpdatePopup} setShowUpdatePopup = {setShowUpdatePopup} todoContent = {todoContent} />         

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
