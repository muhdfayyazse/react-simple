import React,{useEffect, useState} from "react";
import * as courseApi from "../api/courseApi";
import CourseForm from "./CourseForm";
import {toast} from "react-toastify";



const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id:null,
        slug:"",
        title:"",
        authorId:null,
        category:""
    }); 

    useEffect(()=>{
        const slug = props.match.params.slug;
        if(slug){ 
        courseApi.getCourseBySlug(slug).then(_course=> setCourse(_course))
        }
        },[props.match.params.slug]
    );


    const handleChange=({target})=>{
        setCourse({...course, [target.name]:target.value});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!formIsValid()) return;
        courseApi.saveCourse(course).then(res=>{
            props.history.push("/courses")
            toast.success("Course Saved.");
        })
    }

    const formIsValid=()=>{
        const _errors = {};

        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId)_errors.authorId = "Author Id is required";
        if(!course.category) _errors.category = "Category is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    return (
        <>
        <h2>Manage Course</h2>
        <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit}/>
        </>
    );
}

export default ManageCoursePage;