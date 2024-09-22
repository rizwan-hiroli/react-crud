import "./Footer.css"

 function Footer(){
    let authorName="Rizwan Hiroli";
    return(
        <footer className="mainfooter">
            <p>
                <small className="text-success">CRUD MANAGEMENT</small><br></br>
                <small className="author">Author Name : <span>{authorName}</span></small>
            </p>
        </footer>
    );
}
export default Footer
/*class -> className*/
/** {} : React data binding : JSX expression */
