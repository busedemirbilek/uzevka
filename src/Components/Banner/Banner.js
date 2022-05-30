import React from "react";
import "./Banner.css";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();

  const handle2 = () => {
    history.push(`/courses`);
  };
  return (
    <main data-aos="fade">
      <div className="header-home">
        <div className="header-info">
          {/* <p data-aos="fade">Learn from the best</p> */}
          <h1>
          Bizimle becerilerinizi geliştirin
            <br /> Bilgiyi paylaşan yetenekli eğitmenlerden oluşan bir ekibiz.
          </h1>
          <button onClick={handle2} className="btn btn-warning mt-3">Başlayalım</button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
