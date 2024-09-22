import { Navbar } from "../components/Navbar";
import "./Header.css"

 function Header(){
    return(
        <header className="mainheader">
            <h4 className="subHeading">EMPLOYEE CRUD</h4>
            <Navbar></Navbar>
        </header>
    );
}

export default Header