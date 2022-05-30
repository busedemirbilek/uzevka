import { useState, useEffect } from "react";
import { Col, Row, Spinner, Container } from "react-bootstrap"; //importing BOOTSTRAP
import Course from "../../Components/Course/Course";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return (
    <main>
      <Header/>
    <Container>
      <main className="all-courses">
        <h1 className="text-center mb-3 pb-2">Tüm Kurslar</h1>
        <hr className="line" />
        <Row xs={1} md={4} className="g-4">
          {courses.length === 0 ? (
            <Spinner animation="grow" style={{ margin: "50px auto" }} />
          ) : (
            <>
              {courses.map((course) => (
                <Col>
                  <Course course={course} key={course.id}></Course>
                </Col>
              ))}
            </>
          )}
        </Row>
      </main>
    </Container>
    <Footer/>
    </main>
  );
};

export default Courses;
