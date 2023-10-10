import Button from "../../../../common/Button/Button.jsx";
import getCourseDuration from "../../../../helpers/getCourseDuration.js";
import getAuthorNames from "../../../../helpers/getAuthorName.js";
import formatCreationDate from "../../../../helpers/formatCreationDate.js";

function CourseCard({ course }) {
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
        <p>
          <strong>Created at: </strong>
          {formatCreationDate(course.creationDate)}
        </p>
        <Button
          className="courseCard-button"
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
