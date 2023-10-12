import CourseCard from "./components/CourseCard/CourseCard";
import Button from "../../common/Button/Button";
import { mockedCoursesList } from "../../constants";

import './Courses.css';

function Courses() {
  return (
    <div className="courses">
      <div className="courses-right">
        <Button buttonText="Add new course"/>
      </div>
      {mockedCoursesList.map((course) => {
        console.log(course);
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
}

export default Courses;
