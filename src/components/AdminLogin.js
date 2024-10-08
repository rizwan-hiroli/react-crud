import { useRef } from "react";
import Button from '@mui/material/Button';

export function AdminLogin(){
    let usernameNode=useRef();
    let passwordNode=useRef();
    function collectData(ev){
        ev.preventDefault();
        const username=usernameNode.current.value;
        const password=passwordNode.current.value;
        console.log(username);
        console.log(password);
        // we will test admin credentials
    }
    return (
        <>
        <h4 className="text-center">ADMIN LOGIN</h4>
         <div className="d-flex justify-content-center">
             <form className="w-50 bg-secondary p-3" onSubmit={collectData}>
               <div className="mb-3">
                   <label htmlFor="username" className="form-label">USERNAME</label>
                   <input type="text" className="form-control" id="username"  ref={usernameNode} required />
               </div>
               <div className="mb-3">
                   <label htmlFor="password" className="form-label">PASSWORD</label>
                   <input type="password" className="form-control" id="password" ref={passwordNode}  required />
               </div>
               <Button variant="contained"  className="m-2" color="secondary">Submit</Button>
               <Button variant="contained" color="secondary" >Reset</Button>
           </form> 
         </div>
        </>
    );

}