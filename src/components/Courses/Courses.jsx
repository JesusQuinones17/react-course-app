import CourseCard from "./components/CourseCard/CourseCard";
import Button from "../../common/Button/Button";
import { mockedCoursesList } from "../../constants";

import './Courses.css';
import { useState, useEffect } from "react";
import CreateCourse from "../CreateCourse/CreateCourse";

function Courses() {
  const [showCourses, setShowCourses] = useState(true);
  const text = showCourses ? 'Add new course' : 'Create course';

  const changeComponent = () => {
    setShowCourses(!showCourses);
  }

  useEffect(() => {
    console.log(showCourses);
  }, [showCourses])

  return (
    <div className="courses-container">
      <div className="courses-right">
        <Button buttonText={text} onClick={changeComponent}/>
      </div>
      {showCourses ? 
        (
          mockedCoursesList.map((course) => {
          // console.log(course);
          return <CourseCard key={course.id} course={course} />;
          })
        ) : (
          <CreateCourse />
        ) 
      }
       
    </div>
  )
}

export default Courses;
