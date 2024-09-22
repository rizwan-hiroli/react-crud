import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import  ListItemText  from "@mui/material/ListItemText";
import  Typography  from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
export function TaskCard({task, deleteTask}){
 
    const sample_pic="https://pluspng.com/img-png/png-employee-account-avatar-business-colleague-employee-female-group-human-512.png";
return (
<div className="col-sm-6 border border-4">
<article className="row p-2">
    <figure className="col-lg-4 text-center">
        <h6>#{task._id}</h6>
        <figcaption><b>{task.name}</b></figcaption>
        <img className="rounded-pill" 
        src={task.employee_pic!=undefined?`data:image/png;base64,${task.employee_pic}`:sample_pic} 
        height="170" width="170" alt="employee" />
        <Button title="edit pic" component={Link} to={`/editpic/${task._id}`}><AddAPhotoIcon></AddAPhotoIcon></Button> 
    </figure>
    <div className="col-lg-8">
        {/* <p><span>{task.emp_name}</span> joined on <i>{task.joining_date.toString()}</i></p> */}
        <List >
            <ListItem>
                <Typography><b>Name : </b></Typography>
                <ListItemText primary={task.name}></ListItemText>
            </ListItem>
            <Divider ></Divider>
            <ListItem>
                <Typography><b>Description : </b></Typography>
                <ListItemText primary={task.description}></ListItemText>
            </ListItem>
            <Divider ></Divider>
        </List>
        <div>
            <Button component={Link} to={`/edittask/${task._id}`} 
            variant="contained" startIcon={<EditIcon></EditIcon>} className="m-2">EDIT</Button> 
            <Button  variant="contained" color="error" onClick={()=>deleteTask(task._id)} startIcon={<DeleteIcon></DeleteIcon>}>DELETE</Button>
        </div>
    </div>
</article>
</div>
);
}