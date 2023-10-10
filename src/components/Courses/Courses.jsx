import CourseCard from "./components/CourseCard/CourseCard";
import Button from "../../common/Button/Button";
import { mockedCoursesList } from "../../constants";

function Courses() {
  return (
    <div className="courses">
      {mockedCoursesList.map((course) => {
        console.log(course);
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
}

export default Courses;
