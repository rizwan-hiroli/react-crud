import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { NeoEmployees } from './components/NeoEmployees.js';
import { Home } from './components/Home.js';
import { EmployeeForm } from './components/EmployeeForm.js';
import { NeoTasks } from './components/NeoTasks.js';
import { TaskForm } from './components/TaskForm.js';
import { AdminLogin } from './components/AdminLogin.js';
import { getAllEmployees, getEmployeeById } from './model/EmployeeCRUD.js';
import { getAllTasks, getTaskById } from './model/TaskCRUD.js';
import { FileUpload } from './components/FileUpload.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import store from './reactredux/store.js';

const childRoutes=[
    {
        path:"/",
        loader:()=>redirect('home') 
    },
    {
        path:'employees',
        element:<NeoEmployees></NeoEmployees>,
        loader:async ()=>{
            return await getAllEmployees();
        }
    },
    {
        path:'home',
        element:<Home></Home>,
    },
    {
        path:'addemployee',
        element:<EmployeeForm></EmployeeForm>
    },
    {
        path:'editemployee/:_id', /* _id : it will hold router parameter */
        element:<EmployeeForm></EmployeeForm>,
        loader:async ({params})=>{
            return await getEmployeeById(params._id);
        }
    },
    {
        path:'adminlogin',
        element:<AdminLogin></AdminLogin>
    },
    {
        path:'editpic/:_id',
        element:<FileUpload></FileUpload>
    },
    {
        path:'tasks',
        element:<NeoTasks></NeoTasks>,
        loader:async ()=>{
            return await getAllTasks();
        }
    },
    {
        path:'addtask',
        element:<TaskForm></TaskForm>
    },
    {
        path:'edittask/:_id', /* _id : it will hold router parameter */
        element:<TaskForm></TaskForm>,
        loader:async ({params})=>{
            return await getTaskById(params._id);
        }
    },
]
const rootRoutes=[
    {
        path:'/',
        element: <App />,
        children:childRoutes
    }
]
const employeesrouter=createBrowserRouter(rootRoutes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={employeesrouter}></RouterProvider>
    </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
