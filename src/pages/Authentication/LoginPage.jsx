import React from "react";
import "./style.css";
import bookingLogo from '../../assets/booking-logo.PNG'
import appleIcon from  '../../assets/booking-logo.PNG'
import facebookLogo from  '../../assets/facebook-icon.PNG'
import googleIcon from  '../../assets/google-icon.PNG'
import phoneIcon from  '../../assets/phone-success-icon.PNG'


export const LoginPage = () => {
  return (
    <body>
      <header className="header">
        <nav className="nav">
          <div className="nav-icon">
            <a href="/">
            <img src={bookingLogo}  alt="logo" width="120px" />
            </a>
          </div>
          <div className="nav-btns">
            <div className="nav-btn burger-btn">
              <i className="fa-solid fa-bars"></i>{" "}
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="nav-btn nav-lang-btn">
              <div></div>
            </div>
            <div className="nav-btn question-btn">
              <div className="div-center">?</div>
            </div>
          </div>
        </nav>
      </header>
      <main className="main div-center">
        <div className="container">
          <h2>Zaloguj się lub utwórz konto</h2>
          <div className="form">
            <label htmlFor="email" className="form-label">
              Adres e-mail
            </label>
            <input type="email" className="form-input" />
            <button className="form-btn">Kontynuuj za pomocą e-maila</button>
          </div>
          <div className="form-links">
            <div className="links-info">
              <div>lub skorzystaj z jednej z tych opcji</div>
            </div>
            <div className="link-acces">
              <a href="#" className="link">
                <div className="link-icon ">
                <img src={facebookLogo} alt="" />
                </div>
              </a>
              <a href="#" className="link">
                <div className="link-icon">
                  <img src={googleIcon}  alt="" />
                </div>
              </a>
              <a href="#" className="link">
                <div className="link-icon">
                  <img src={phoneIcon}  alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className="form-footer">
            <div className="footer-text-one footer-center">
              <p>
                Zalogowanie się na swoje konto lub utworzenie go jest
                równoznaczne z akceptacją <a href="#">Warunkow</a> oraz{" "}
                <a href="#">Oświadczenia o ochronie prywatności.</a>
              </p>
            </div>
            <div className="footer-center">
              <p>
                Wszelkie prawa zastrzeżone. <br />
                Prawa autorskie (2006-2022) - Booking.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};
