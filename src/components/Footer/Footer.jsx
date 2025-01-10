import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">About us</h3>
          <div className="footer__logo">
            <img src="https://framerusercontent.com/modules/ep5NRmNv6qcNQn7IC5lJ/f5fbtiYACgLORPZENIga/assets/0mBgJmpKBfrVMW7TzdewceK3reg.png" alt="Workze" />
          </div>
          <address className="footer__address">
            Storkower Strasse 41,<br />
            Rheinland-Pfalz, 56379,<br />
            Office 4480, Room 56<br />
            Germany
          </address>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Landing Pages</h3>
          <nav className="footer__nav">
            <a href="/startup" className="footer__link footer__link--purple">Landing Page Startup</a>
            <a href="/corporate" className="footer__link">Landing Page Corporate</a>
            <a href="/minimal" className="footer__link">Landing Page Minimal</a>
            <a href="/coming-soon" className="footer__link">Coming Soon</a>
            <a href="/404" className="footer__link">Page 404</a>
            <a href="/apply" className="footer__link">Apply for a job</a>
          </nav>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Misc Pages</h3>
          <nav className="footer__nav">
            <a href="/about" className="footer__link">About Us</a>
            <a href="/team" className="footer__link">Our Team</a>
            <a href="/profile-modern" className="footer__link">User Profile Modern</a>
            <a href="/profile-centered" className="footer__link">User Profile Centered</a>
            <a href="/contact" className="footer__link">Contact Us</a>
            <a href="/style-guide" className="footer__link">Style Guide</a>
          </nav>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Job Search</h3>
          <nav className="footer__nav">
            <a href="/jobs" className="footer__link">Job List</a>
            <a href="/jobs-corporate" className="footer__link">Job List Corporate</a>
            <a href="/jobs-sidebar" className="footer__link">Job List Sidebar</a>
            <a href="/jobs-minimal" className="footer__link">Job List Minimal</a>
            <a href="/job-overview" className="footer__link">Job Overview</a>
            <a href="/job-overview-centered" className="footer__link">Job Overview Centered</a>
            <a href="/job-overview-minimal" className="footer__link">Job Overview Minimal</a>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <p className="footer__copyright">© 2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;