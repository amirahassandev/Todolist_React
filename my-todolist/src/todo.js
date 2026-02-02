
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './style.css'

export default function Todo(props){
    return (
        <Card style={{maxWidth: "100%", backgroundColor: "#06064c", display: "flex", padding: "0 20px", justifyContent: "space-between"}} className='todoCard'>
            <CardContent>
                <p style={{color: "white", fontSize: "14px"}}>{props.title}</p>
                <Typography variant="body2" sx={{ color: '#ffffffe3', fontSize: "12px" }}>
                  {props.details}
                </Typography>
            </CardContent>
            <CardActions>
                <CheckOutlinedIcon style={{color: "rgba(0, 128, 0, 0.88)", border: "1px rgba(0, 128, 0, 0.88) solid"}} className="icons" />
                <EditOutlinedIcon className="icons" style={{color: "blue", border: "1px solid blue"}} />
                <DeleteOutlineOutlinedIcon className="icons" style={{color: "red", border: "1px red solid"}}/>
            </CardActions>
        </Card>
    )
}
