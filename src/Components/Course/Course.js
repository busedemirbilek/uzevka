import React from "react";
import "./Course.css"; //import css style
import { Card } from "react-bootstrap"; //import BOOTSTRAP
import Rating from "react-rating"; //import RATING
import { useHistory } from "react-router-dom";

const Course = (props) => {
  const history = useHistory();
  const { course } = props;
  const {
    instructor,
    img,
    category,
    courseTitle,
    level,
    id,
    rating,
    duration
  } = course;
  const handleEnroll = () => {
    history.push(`/courseDetails/${id}`);
  };

  return (
    <Card className="course" data-aos="fade-right">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center">
          <p className="course-category">{category}</p>
          <p className="course-level">{level}</p>
        </div>
        <h5 onClick={handleEnroll} className="course-title">{courseTitle}</h5>
        <p className="course-instructor">Eğitmen : {instructor}</p>
        <div className="d-flex align-items-center justify-content-between">
          <p className="course-duration">
            <i className="far fa-clock me-2"></i>
            {duration}saat
          </p>
        </div>
        <div className="course-review d-flex justify-content-between align-items-center">
          <p className="rating">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol="far fa-star star-icon"
              fullSymbol="fas fa-star star-icon"
            ></Rating>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Course;
