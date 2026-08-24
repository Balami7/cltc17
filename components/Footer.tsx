import Link from "next/link";

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
          {/*<div className="social-icons">
            <a href="#" className="social-link"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-youtube"></i></a>
          </div>*/}
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
              0705 743 0891 <br />
              0803 451 1807
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              info@cltc.gov.ng
            </div>
          </div>
        </div>

        <div className="footer-column links-column">
          {/*<h4>Quick Links</h4>*/}
          <ul className="footer-links">
            <li><Link href="/about">ABOUT US</Link></li>
            <li><Link href="/program">PROG & EVENT</Link></li>
            <li><Link href="/school">TRAINING SCHOOLS</Link></li>
            <li><Link href="/newsmedia">NEWS & MEDIA</Link></li>
            <li><Link href="/procurement">PROCUREMENT</Link></li>
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
        <p>Copyright © {new Date().getFullYear()} CLTC | Powered by CLTC.</p> 
      </div>
    </footer>
  );
}
