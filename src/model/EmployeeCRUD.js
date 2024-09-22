import axios from 'axios';


const url="http://localhost:8000/api/users";
//const url2="http://localhost:3000/employees" // for json-server
export async function addEmployee(employee){
    const response=await axios.post(url+"/add",employee);
    //const response=await axios.post(url,employee);
   // console.log(response);
    return response.data;
}
export async function updateEmployee(employee){
    const response=await axios.put(`${url}/update/${employee._id}`,employee);
    //const response=await axios.post(url,employee);
   // console.log(response);
    return response.data;
}
export async function deleteEmployeeById(_id){
    const response=await axios.delete(`${url}/delete/${_id}`) //`${url2}/${_id}`
    return response.data; // query result
}
export async function getEmployeeById(_id){
    const response=await axios.get(`${url}/get/${_id}`); //`${url2}/${_id}`
    return response.data;
}
export async function getEmployeesByName(emp_name){
    const response=await axios.get(`${url}/getbyname/${emp_name}`); //`${url2}/${_id}`
    return response.data;
}
export async function getAllEmployees(){
    const response=await axios.get(url+"/getall") // url2
    return response.data;
}

export async function uploadEmployeePic(_id,employee_pic){
    //console.log(_id);
    //console.log(employee_pic);
    let formData=new FormData();
    formData.append('employee_pic',employee_pic)
    const response=await axios.put(`${url}/upload/${_id}`,formData)
    //console.log(response.data);
    return response.data;
}

