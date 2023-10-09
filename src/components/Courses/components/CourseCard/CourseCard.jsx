import Button from "../../../../common/Button/Button.jsx";
import { mockedAuthorsList } from "../../../../constants.js";
import getCourseDuration from "../../../../helpers/getCourseDuration.js";

function CourseCard({ course }) {
  const getAuthorNames = (authorIds) => {
    return authorIds
      .map((authorId) => {
        const author = mockedAuthorsList.find(
          (author) => author.id === authorId
        );
        return author ? author.name : "";
      })
      .join(", ");
  };
  return (
    <div className="courseCard">
      <div className="courseCard-title">
        <h2>{course.title}</h2>
        <p className="courseCard-description">{course.description}</p>
      </div>
      <div className="courseCard-details">
        <p>
          <strong>Authors: </strong>
          {getAuthorNames(course.authors)}
        </p>
        <p>
          <strong>Duration: </strong>
          {getCourseDuration(course.duration)}
        </p>
        <Button
          className="courseCard-show-btn"
          // type="submit"
          buttonText="Show course"
          onClick={() => {
            alert("Show Course");
          }}
        />
      </div>
    </div>
  );
}

export default CourseCard;
