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
export function EmployeeCard({employee, deleteEmployee}){
 
    const sample_pic="https://pluspng.com/img-png/png-employee-account-avatar-business-colleague-employee-female-group-human-512.png";
return (
<div className="col-sm-6 border border-4">
<article className="row p-2">
    <figure className="col-lg-4 text-center">
        <h6>#{employee._id}</h6>
        <figcaption><b>{employee.emp_name}</b></figcaption>
        <img className="rounded-pill" 
        src={employee.employee_pic!=undefined?`data:image/png;base64,${employee.employee_pic}`:sample_pic} 
        height="170" width="170" alt="employee" />
        <Button title="edit pic" component={Link} to={`/editpic/${employee._id}`}><AddAPhotoIcon></AddAPhotoIcon></Button> 
    </figure>
    <div className="col-lg-8">
        <p><span>{employee.emp_name}</span> joined on <i>{employee.joining_date.toString()}</i></p>
        <List >
            <ListItem>
                <Typography><b>Email Id : </b></Typography>
                <ListItemText primary={employee.emp_email}></ListItemText>
            </ListItem>
            <Divider ></Divider>
            <ListItem>
                <Typography><b>Basic Salary : </b></Typography>
                <ListItemText primary={employee.emp_salary}></ListItemText>
            </ListItem>
            <Divider ></Divider>
            <ListItem>
                <Typography><b>Experience : </b></Typography>
                <ListItemText primary={employee.experience}></ListItemText>
            </ListItem>
            <Divider ></Divider>
            <ListItem>
                <Typography><b>Department : </b></Typography>
                <ListItemText primary={employee.dept_code}></ListItemText>
            </ListItem>
        </List>
        <div>
            <Button component={Link} to={`/editemployee/${employee._id}`} 
            variant="contained" startIcon={<EditIcon></EditIcon>} className="m-2">EDIT</Button> 
            <Button  variant="contained" color="error" onClick={()=>deleteEmployee(employee._id)} startIcon={<DeleteIcon></DeleteIcon>}>DELETE</Button>
        </div>
    </div>
</article>
</div>
);
}