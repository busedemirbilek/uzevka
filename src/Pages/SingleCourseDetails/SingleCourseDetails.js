import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleCourseDetails.css";
import { Row, Col, Button } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const SingleCourseDetails = () => {
  const { courseId } = useParams();
  const [singlecourse, setCourse] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);

  const filteredCourse = singlecourse.filter(
    (allData) => allData.id == courseId
  );
  console.log(singlecourse);

  return (
    <main>
      <Header />
      <div className="singleCourse">
        <div className="inside_container">
          <Row>
            <Col sm={12} md={6}>

              <div className="leftSide">
                <img src={filteredCourse[0]?.img} alt="" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="rightside  p-5">
                <h4><bold>{filteredCourse[0]?.courseTitle}</bold></h4>
                <h6>Bu ders Kırıkkale Üniversitesi'nde {filteredCourse[0]?.instructor} tarafından verilmektedir.</h6>
                <h6>Gereksinimler</h6>
                <p>*Bilgiyi Öğrenmeye Ve Uygulama İsteği</p>
                <p>*Derslere Yüksek Konstrasyon İle Katılım</p>
                <p>*Temel Seviyede Bilgisayar Kullanma Yetkinliği</p>
                <a href={filteredCourse[0]?.pdfURL} target="_blank" rel="noreferrer">
                  <Button style={{ backgroundColor: "#6cbd7e" }}>
                    Ders Notları
                  </Button>
                </a>
                <a href={filteredCourse[0]?.videoURL} target="_blank" rel="noreferrer">
                  <Button style={{
                    backgroundColor: "#df0e0e"
                  }}>
                    Ders Videoları
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default SingleCourseDetails;
