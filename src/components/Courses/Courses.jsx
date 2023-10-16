import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import CreateCourse from "../CreateCourse/CreateCourse";
import { mockedCoursesList } from "../../constants";
import './Courses.css';

import { useState } from "react";

function Courses() {
  const [updatedCoursesList, setUpdatedCoursesList] = useState(mockedCoursesList);
  const [showCourses, setShowCourses] = useState(true);
  const text = showCourses ? 'Add new course' : 'Create course';

  const changeComponent = () => {
    setShowCourses(!showCourses);
  }

  const addNewCourse = (newCourse) => {
    setUpdatedCoursesList([...updatedCoursesList, newCourse ])
    // console.log(typeof mockedCoursesList);
  }

  return (
    <div className="courses-container">
      <div className="courses-right">
        <Button buttonText={text} onClick={changeComponent}/>
      </div>
      {showCourses ? 
        (
          updatedCoursesList.map((course) => {
          console.log(course);
          return <CourseCard key={course.id} course={course} />;
          }, )
        ) : (
          <CreateCourse onClick={changeComponent}/>
        ) 
      }
       
    </div>
  )
}

export default Courses;
