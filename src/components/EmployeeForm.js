import { useEffect, useState } from "react";
import { Employee } from "../classes/Employee";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import {addEmployee, updateEmployee} from '../model/EmployeeCRUD';
import Button from '@mui/material/Button';
export function EmployeeForm(){
    const location=useLocation();
  //  const {_id}=useParams(); // if we want to use param data then use call this hook
    //console.log(_id);
    const emp=useLoaderData();
    const departments=['LD', 'JS','HR','PHP','JAVA'];
    let [employee, setEmployee]=useState(initialEmployee());
    function initialEmployee(){
        if(location.pathname.includes("addemployee")) // we will check active route
            return new Employee(); // new employee
        else{
            let jd=emp.joining_date;
            emp.joining_date=jd.slice(0,jd.length-1);
            return emp; // searched employee
        }
    }
    const navigate=useNavigate();
    function changeState(ev){
      // console.log(ev.target.value);
      // console.log(ev.target.id);
       // setId(ev.target.value);
       setEmployee({...employee, [ev.target.id]:ev.target.value});
    }
    useEffect(()=>{
      // console.log(location);
    })
    function collectData(ev){
        ev.preventDefault();
        if(location.pathname.includes("addemployee")){ // active route
           addEmp();
        }
        else{
            updateEmp();
        }
    }
    async function addEmp(){
        const emp=await addEmployee(employee);
       // console.log(emp);
        if(emp!==null && emp!==""){
            window.alert(`Employee with id ${emp._id} added successfully...`)
            
        }
        else
            window.alert("Something went wrong while adding new employee....")
        navigate('/employees');
    }
    async function updateEmp(){
        const data=await updateEmployee(employee);
       // console.log(data);
        if(data.modifiedCount>0){  /* emp!==null && emp!=="" */
            window.alert(`Employee with id ${employee._id} updated successfully...`)
            
        }
        else
            window.alert("Something went wrong while updating employee....")

        navigate('/employees');
    }
    return (
     <>
     <h4 className="text-center">EMPLOYEE FORM</h4>
      <div className="d-flex justify-content-center">
          <form className="w-50 bg-secondary p-3" onSubmit={collectData}>
            <div className="mb-3">
                <label htmlFor="_id" className="form-label">ID</label>
                <input type="number" className="form-control" id="_id"  value={employee._id} onChange={changeState} required readOnly={location.pathname.includes("editemployee")} />
            </div>
            <div className="mb-3">
                <label htmlFor="emp_name" className="form-label">NAME</label>
                <input type="text" className="form-control" id="emp_name" value={employee.emp_name} onChange={changeState} required />
            </div>
            <div className="mb-3">
                <label htmlFor="emp_email" className="form-label">EMAIL ID</label>
                <input type="email" className="form-control" id="emp_email" value={employee.emp_email} onChange={changeState} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="emp_salary" className="form-label">SALARY</label>
                <input type="number" className="form-control" id="emp_salary" value={employee.emp_salary} onChange={changeState} required />
            </div>
            <div className="mb-3">
                <label htmlFor="experience" className="form-label">EXPERIENCE</label>
                <input type="number" className="form-control" id="experience" value={employee.experience} onChange={changeState} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="dept_code" className="form-label">DEPT CODE</label>
                <select  className="form-control" id="dept_code" value={employee.dept_code} onChange={changeState} required>
                    {departments.map((dept, i)=><option key={'d'+i}>{dept}</option>)}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="joining_date" className="form-label">JOINING DATE</label>
                <input type="datetime-local" className="form-control" id="joining_date" value={employee.joining_date} onChange={changeState} required />
            </div>
            <div className="mb-3">
                <label htmlFor="secrete_code" className="form-label">SECRETE CODE</label>
                <input type="password" className="form-control" id="secrete_code" value={employee.secrete_code} onChange={changeState} required/>
            </div>
            <button variant="contained"  className="m-2" color="success">Submit</button>
            <button variant="contained" color="success" >Reset</button>
        </form> 
      </div>
     </>
    )
}