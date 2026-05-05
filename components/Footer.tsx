export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <div className="footer-column logo-column">
          <img
            src="/image 2.jpg"
            alt="Citizenship and Leadership Training Centre Logo"
            className="footer-logo-img"
          />
          <div className="social-icons">
            <a href="#" className="social-link"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-column contact-column">
          <div className="footer-logo-text">
            Citizenship & Leadership Training Centre (CLTC)
          </div>
          <p className="tagline">
            Empowering Nigerians through leadership development and experiential training.
          </p>
        </div>

        <div className="footer-column contact-address">
          <div className="contact-info">
            <div className="address">
              <i className="fa-solid fa-location-dot"></i>
              Plot 1075, Joseph Gomwalk Str, <br />
              Gudu District, <br />
              P.M.B. 345, Garki Abuja
            </div>
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              +234-803-320-4064<br />
              +234-803-300-289<br />
              +234-803-631-7224<br />
              +234-803-667-3841
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              cltcnigeria@gmail.com<br />
              info@cltc.gov.ng
            </div>
          </div>
        </div>

        <div className="footer-column links-column">
          {/*<h4>Quick Links</h4>*/}
          <ul className="footer-links">
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">PROG & EVENT</a></li>
            <li><a href="#">TRAINING SCHOOLS</a></li>
            <li><a href="#">NEWS & MEDIA</a></li>
            <li><a href="#">PROCUREMENT</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>

        <div className="footer-column arms-column">
          <img
            src="/image 12.png"
            alt="Coat of Arms of Nigeria"
            className="arms-img"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 CLTC | Powered by CLTC.</p>
      </div>
    </footer>
  );
}
