import { useEffect } from 'react';
import Button from "../../common/Button/Button";
import CourseCard from "./components/CourseCard/CourseCard";
import CreateCourse from "../CreateCourse/CreateCourse";
import { mockedCoursesList } from "../../constants";
import './Courses.css';

import { useState } from "react";

function Courses() {
  const [updatedCoursesList, setUpdatedCoursesList] = useState([]);
  const [showCourses, setShowCourses] = useState(true);
  const text = showCourses ? 'Add new course' : 'Create course';

  const apiCoursesURL = 'http://localhost:4000/courses/all';

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(apiCoursesURL, requestOptions);
        if (!response.ok) {
          throw new Error('Get courses failed');
        }
        const courses = await response.json();
        setUpdatedCoursesList(courses);
        console.log(updatedCoursesList);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetch(apiCoursesURL, requestOptions).then(resp => console.log(resp.body));
    getCourses();
  }, []);


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
      {showCourses ? (
        <>
          <pre>{JSON.stringify(updatedCoursesList.result[0], null, 2)}</pre>
          
        </>
      ) : (
        <CreateCourse onClick={changeComponent}/>
      )}

    </div>
  )
}

export default Courses;


