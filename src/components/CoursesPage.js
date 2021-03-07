import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

import {getCourses,deleteCourse} from '../api/courseApi';
import CoursesList from "./CoursesList";

const CoursesPage = (props)=>{
    const [courses, setCourses] = useState([]);

    useEffect(()=> getCourses().then(c=> setCourses(c)),[]);            
    const handleDelete = (courseId)=>{
        deleteCourse(courseId).then(res=>getCourses().then(c=> setCourses(c)))
    }

    return (
        <>
        
        <h2>Course</h2>
        <Link to="/course" className="btn btn-primary" >Add Course</Link>
        <CoursesList courseslist={courses} onDelete={handleDelete} />
        </>
    );
}


export default CoursesPage;