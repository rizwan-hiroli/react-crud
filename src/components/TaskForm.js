import { useEffect, useState } from "react";
import { Task } from "../classes/Task";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import {addTask, updateTask} from '../model/TaskCRUD';
import Button from '@mui/material/Button';
export function TaskForm(){
    const location=useLocation();
  //  const {_id}=useParams(); // if we want to use param data then use call this hook
    //console.log(_id);
    const tsk=useLoaderData();
    const departments=['LD', 'JS','HR','PHP','JAVA'];
    let [task, setTask]=useState(initialTask());
    function initialTask(){
        if(location.pathname.includes("addtask")) // we will check active route
            return new Task(); // new employee
        else{
            // let jd=emp.joining_date;
            // emp.joining_date=jd.slice(0,jd.length-1);
            return tsk; // searched employee
        }
    }
    const navigate=useNavigate();
    function changeState(ev){
      // console.log(ev.target.value);
      // console.log(ev.target.id);
       // setId(ev.target.value);
       setTask({...task, [ev.target.id]:ev.target.value});
    }
    useEffect(()=>{
      // console.log(location);
    })
    function collectData(ev){
        ev.preventDefault();
        if(location.pathname.includes("addtask")){ // active route
           addTsk();
        }
        else{
            updateTsk();
        }
    }
    async function addTsk(){
        const tsk=await addTask(task);
        //console.log(tsk);
        if(tsk!==null && tsk!==""){
            window.alert(`Task with id ${tsk._id} added successfully...`)
        }
        else
            window.alert("Something went wrong while adding new task....")
        navigate('/tasks');
    }
    async function updateTsk(){
        const data=await updateTask(task);
       // console.log(data);
        if(data.modifiedCount>0){  /* emp!==null && emp!=="" */
            window.alert(`Task with id ${task._id} updated successfully...`)
            
        }
        else
            window.alert("Something went wrong while updating task....")

        navigate('/tasks');
    }
    return (
     <>
     <h4 className="text-center">TASK FORM</h4>
      <div className="d-flex justify-content-center">
          <form className="w-50 bg-secondary p-3" onSubmit={collectData}>
            <div className="mb-3">
                <label htmlFor="_id" className="form-label">ID</label>
                <input type="number" className="form-control" id="_id"  value={task._id} onChange={changeState} required readOnly={location.pathname.includes("edittask")} />
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">NAME</label>
                <input type="text" className="form-control" id="name" value={task.name} onChange={changeState} required />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">DESCRIPTION</label>
                <input type="text" className="form-control" id="description" value={task.description} onChange={changeState} required/>
            </div>
            <button variant="contained"  className="m-2" color="success">Submit</button>
            <button variant="contained" color="success" >Reset</button>
        </form> 
      </div>
     </>
    )
}