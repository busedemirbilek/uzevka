import React from "react";
import "./Footer.css"; //import css style
import logo from "../../images/logo-white.png";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer>
      <ScrollToTop smooth top="1000" style={{ backgroundColor: "#dda83f" }} />
      <ul className="footer-list">
        <li className="footer-item">
          <img src={logo} alt="" />
          <p>
          UZEVKA, çevrimiçi kurslar ve eğitimdeki belki de en büyük isimdir. 
          30'dan fazla özel kurs sunmak için küresel bir üniversite ve ortak listesine sahiptir.
          </p>
        </li>
        <li className="footer-item">
          <h4>Adres</h4>
          <p>Yenişehir, Kırıkkale Üniversitesi Yerleşkesi, Ankara Cd. 7. Km, 71450 Yahşihan/Kırıkkale</p>
        </li>
        <li className="footer-item">
          <h4>İletişim</h4>
          <p>
            Mobile: 0 (0318) 357 42 60 <br /> Fax: 0 (0318) 357 20  49 <br /> Mail:
            bmb@kku.edu.tr
          </p>
          <span>
            <a href="https://www.instagram.com/kirikkaleunv/">
              <i className="fab fa-2x fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href="https://twitter.com/kirikkaleunv?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <i className="fab fa-2x fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/school/k%C4%B1r%C4%B1kkale-%C3%BCniversitesi/?originalSubdomain=tr">
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com/kirikkaleunv/">
              <i className="fab fa-2x fa-facebook"></i>
            </a>
          </span>
        </li>
        <li className="footer-item">
          <h4>Çalışma Saatleri</h4>
          <p>
            Pazartesi - Cuma: 09:00 - 17:00 <br /> 
          </p>
        </li>
      </ul>
      <p className="copyright-text">
        <small>Copyright &copy; All Rights Reserved UZEVKA.</small>
      </p>
      
    </footer>
  );
};

export default Footer;
