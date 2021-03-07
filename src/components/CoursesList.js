import React from "react";
import {Link} from "react-router-dom";



const CoursesList = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author Id</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.courseslist.map(c=>{
                        return (
                           <tr key={c.id}>
                               <td><Link to={"/course/"+c.slug}>{c.title}</Link></td>
                               <td>{c.authorId}</td>
                               <td>{c.category}</td>
                               <td><input type="button" value="Delete" className="btn btn-primary" onClick={()=>props.onDelete(c.id)} /></td>
                            </tr>     
                        );
                    })            
                }
            </tbody>
        </table>
    );
}

export default CoursesList;