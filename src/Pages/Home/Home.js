import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Col} from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import PopularCourse from "../../Components/PopularCourse/PopularCourse";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  const handle1 = () => {
    history.push(`/courses`);
  };
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
<Header/>
      <Banner></Banner>
      <Container>
        <div className="courses-home container mt-0 py-5">
          <h2 className="mb-4">Popüler Kurslar</h2>
          <hr className="line" />
          <Row xs={1} md={3} className="g-4">
            {courses.length === 0 ? (
              <Spinner animation="grow" style={{ margin: "50px auto" }} />
            ) : (
              <>
                {courses.map((course) => (
                  <Col>
                    <PopularCourse
                      key={course.id}
                      course={course}
                    ></PopularCourse>
                  </Col>
                ))}
              </>
            )}
          </Row>
          <button onClick={handle1} className="btn btn-success d-block mx-auto mt-4">
            Tüm kursları görüntüle
          </button>
        </div>
      </Container>
      <div className="alert-home m-0">
        <h2>Geleceğiniz için bir sonraki adımı atmaya hazır mısınız?</h2>
      </div>
      <Footer/>
    </div>
  );
};
export default Home;
