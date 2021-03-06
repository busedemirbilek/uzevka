import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css"; //importing css style
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Member from "./Member/Member";

const About = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <main>
      <Header/>
      <section className="about">
        <div className="about-header">
          <h1>
            <span className="heading-about-secondary">Öğrenme Yoluyla</span>{" "}
            <br />
            <span className="heading-about-primary">Yaşamları İyileştirmek...</span>
          </h1>
        </div>
        <div className="about-team container py-5">
          <h2 className="text-center mb-3 pb-2">Eğitmenlerimizle Tanışın</h2>
          <hr className="line" />
          <Row xs={1} md={4} className="g-3">
            {members.map((member) => (
              <Col>
                <Member key={member.id} member={member}></Member>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default About;
