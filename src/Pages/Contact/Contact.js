import React from "react";
import "./Contact.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <main className="contact" data-aos="fade">
      <Header/>
      <div className="container">
        <div className="contact-heading-box">
          <h2>Size Yardımcı Olmak İçin Buradayız</h2>
          <p>
            Her zaman sizden haber almak istiyoruz!
            Size en iyi şekilde nasıl yardımcı olabileceğimizi bize bildirin ve elimizden gelenin en iyisini yapacağız.
          </p>
        </div>
        <Form className="full-width mx-auto pb-4">
          <Row xs={1} md={2} className="mb-3">
            <Form.Group className="sm-mb" as={Col} controlId="formGridPassword">
              <Form.Label className="text-white">İsim Soyisim</Form.Label>
              <Form.Control type="" placeholder="İsim Soyisim giriniz..." />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Email adresinizi giriniz..." />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className="text-white">Adres</Form.Label>
            <Form.Control placeholder="İl/İlçe" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Bize bir şeyler söyle..."
              style={{ height: "150px" }}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Gönder
          </Button>
        </Form>
      </div>
      <Footer/>
    </main>
  );
};

export default Contact;
