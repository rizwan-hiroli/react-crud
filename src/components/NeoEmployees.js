import { useEffect, useRef, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { deleteEmployeeById, getAllEmployees, getEmployeesByName } from "../model/EmployeeCRUD";
import { useLoaderData } from "react-router-dom";


export function NeoEmployees(){
    const nameNode=useRef();
    const data=useLoaderData();
    let [employees, setEmployees]=useState(data); 
    let [errorMessage, setMessage]=useState("");
    async function getEmps(){
        const data=await getAllEmployees();
        console.log(data);
        setEmployees(data);
    }
    async function deleteEmployee(_id){
        //console.log("data from child:"+_id);
        const ans=window.confirm("Do you really want to delete?");
        if(ans){
            const data=await deleteEmployeeById(_id);
           // console.log(data); 
            if(data.deletedCount>0) /* data!=null */
            {
                window.alert("Employee deleted successfully....");
                getEmps();
            }
            else
                window.alert("Something went wrong while deleting....");
        }
    }  
    async function  searchEmp(emp_name){
        console.log("name", emp_name);
        if(emp_name!=="")
        {
            const data=await getEmployeesByName(emp_name);
            //console.log(data);
            if(data.length>0)
                setEmployees(data);
            else
                setMessage("NOT FOUND");
        }
        else{
            setMessage("");
            setEmployees(data);
        }
            
            
    }
    useEffect(()=>{ 
        console.log("in useEffect");
       // console.log(employees);
      //  getEmps();
    }/* ,[] */)

    const employeeCards=employees.map((employee, i)=><EmployeeCard key={'e'+i} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
        <>
        <section className="m-2">
            <label>Employee name to search:</label>
            <input type="text" ref={nameNode} onKeyUp={()=>searchEmp(nameNode.current.value)}></input>
            <span className="text-danger text-bold"> {errorMessage}</span>
        </section>
        
        <div className="row">
            {employeeCards}
        </div>
        </>
      
    );
}