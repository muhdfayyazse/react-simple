import React from "react";

import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";
import About from "./About";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import {Route,Switch, Redirect} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const App = () => {
    return (
        <div className="container-fluid" >
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch> 
            <Route path="/" exact component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course/:slug" component={ManageCoursePage} />
            <Route path="/course" component={ManageCoursePage} />
            <Route path="/about" component={About} />
            <Redirect from="/about-page" to="/about" />
            <Route component={NotFoundPage} />
            </Switch>   
        </div>
    );


}


export default App;