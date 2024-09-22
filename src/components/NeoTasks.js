import { useEffect, useRef, useState } from "react";
import { TaskCard } from "./TaskCard";
import { deleteTaskById, getAllTasks, getTasksByName } from "../model/TaskCRUD";
import { useLoaderData } from "react-router-dom";


export function NeoTasks(){
    const nameNode=useRef();
    const data=useLoaderData();
    let [tasks, setTask]=useState(data); 
    let [errorMessage, setMessage]=useState("");
    async function getTasks(){
        const data=await getAllTasks();
        console.log(data);
        setTask(data);
    }
    async function deleteTask(_id){
        //console.log("data from child:"+_id);
        const ans=window.confirm("Do you really want to delete?");
        if(ans){
            const data=await deleteTaskById(_id);
           // console.log(data); 
            if(data.deletedCount>0) /* data!=null */
            {
                window.alert("Task deleted successfully....");
            }
            else
                window.alert("Something went wrong while deleting....");

            getTasks();
        }
    }  
    async function  searchTask(task_name){
        console.log("name", task_name);
        if(task_name!=="")
        {
            const data=await getTasksByName(task_name);
            //console.log(data);
            if(data.length>0)
                setTask(data);
            else
                setMessage("NOT FOUND");
        }
        else{
            setMessage("");
            setTask(data);
        }
            
            
    }
    useEffect(()=>{ 
        console.log("in useEffect");
       // console.log(employees);
      //  getEmps();
    }/* ,[] */)

    const taskCards=tasks.map((task, i)=><TaskCard key={'e'+i} task={task} deleteTask={deleteTask}></TaskCard>)
    return(
        <>
        <section className="m-2">
            <label>Task name to search:</label>
            <input type="text" ref={nameNode} onKeyUp={()=>searchTask(nameNode.current.value)}></input>
            <span className="text-danger text-bold"> {errorMessage}</span>
        </section>
        
        <div className="row">
            {taskCards}
        </div>
        </>
      
    );
}