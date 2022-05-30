import React from "react";
import "./PopularCourse.css";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router-dom";

const PopularCourse = (props) => {
  const { course } = props;
  const {
    id,
    instructor,
    img,
    category,
    courseTitle,
    level,
    duration,
    rating,
    enrolled,
  } = course;

  const history = useHistory();

  const handleEnroll = () => {
    history.push(`/courseDetails/${id}`);
  };
  return (
    <Card className="popular-course" data-aos="fade-right">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="popular-course-category">{category}</p>
          <p className="popular-course-level">{level}</p>
        </div>
        <h5 onClick={handleEnroll} className="popular-course-title">{courseTitle}</h5>
        <p className="popular-course-instructor">Eğitmen : {instructor}</p>
        <div className="popular-course-review d-flex justify-content-between align-items-center">
          <p>
            <Rating
              initialRating={rating}
              readonly
              emptySymbol="far fa-star star-icon"
              fullSymbol="fas fa-star star-icon"
            ></Rating>
          </p>
          <p className="users-icon">
            <i className="fas fa-users"></i> {enrolled}
          </p>
          <p className="course-duration">
            <i className="far fa-clock me-2"></i>
            {duration}saat
          </p>
        </div>
        
      </Card.Body>
    </Card>
  );
};

export default PopularCourse;
